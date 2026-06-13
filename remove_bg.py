from PIL import Image

def remove_white_bg(input_path, output_path, threshold=235):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Change white to transparent
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

input_file = "/Users/lebron/.gemini/antigravity/brain/71a4ec84-a8e8-4d6f-bfd5-f856acbbfb71/media__1781337087535.png"
output_file = "/Users/lebron/antigrav/grace-engineering/public/grace_logo.png"

remove_white_bg(input_file, output_file)
print("Saved transparent logo to", output_file)
