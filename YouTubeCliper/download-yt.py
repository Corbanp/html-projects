from pytube import YouTube
from moviepy.editor import *
import os
import scenedetect

# Step 1: Download the YouTube video
url = 'https://www.youtube.com/watch?v=yehY18giySw'
yt = YouTube(url)

# Download the video stream
video_stream = yt.streams.get_highest_resolution()
video_path = video_stream.download()

# Download the audio stream
audio_stream = yt.streams.filter(only_audio=True).order_by('abr').desc().first()
audio_path = audio_stream.download()

# Step 2: Merge the highest quality video and audio streams
video_file = VideoFileClip(video_path)
audio_file = AudioFileClip(audio_path)
final_video = video_file.set_audio(audio_file)
final_video.write_videofile(video_path.replace(".mp4", "_hq.mp4"), fps=60, codec="mpeg4")

# Release the file resources
video_file.close()
audio_file.close()

# Step 3: Delete the original downloaded files
os.remove(video_path)
os.remove(audio_path)

# Step 4: Perform shot detection
detector = scenedetect.VideoManager([final_video.filename])
detector.add_detector(scenedetect.detectors.ContentDetector())
detector.detect_content(threshold=60)
scene_list = detector.get_scene_list()

# Step 5: Extract and save each shot as a separate video file
for i, scene in enumerate(scene_list):
    start_time = scene[0].get_seconds()
    end_time = scene[1].get_seconds()
    
    # Extract the shot from the original video
    video_file = VideoFileClip(final_video.filename)
    shot = video_file.subclip(start_time, end_time)
    
    # Save the shot as a new file
    output_path = f"shot_{i}.mp4"
    shot.write_videofile(output_path, fps=60, codec="mpeg4")
    
    # Close the video file
    shot.close()
