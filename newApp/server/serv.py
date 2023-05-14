import requests
import sys
import subprocess
import os

base_url=""
if(len(sys.argv)!=2):
    print("Give only device id as argument")

device_id=sys.argv[1]

x=requests.get(url+device_id).json()
dist=x['distance']
temp=x['temperature']
# humidity=x['humidity']


os.chdir("./data")

outp=subprocess.run(["mkdir","-p",device_id],capture_output=True).stdout

print(outp)

os.chdir(f"./{device_id}")
outp=subprocess.run(["touch","distance.txt","humidity.txt","temperature.txt"],capture_output=True).stdout

print(outp)

outp=subprocess.run([f"echo {dist} > distance.txt"])
outp=subprocess.run([f"echo {temp} > temperature.txt"])
# outp=subprocess.run([f"echo {humidity} > humidity.txt"])
