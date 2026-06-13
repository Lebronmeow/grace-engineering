from PIL import Image

def remove_outer_bg(input_path, output_path, threshold=240):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    # Target color to replace is white-ish
    # We will do a flood fill starting from (0,0) and a few other edges
    # Stack for DFS
    stack = [(0, 0), (width-1, 0), (0, height-1), (width-1, height-1)]
    visited = set(stack)
    
    while stack:
        x, y = stack.pop()
        
        r, g, b, a = pixels[x, y]
        if r > threshold and g > threshold and b > threshold and a > 0:
            # It's background white, make it transparent
            pixels[x, y] = (255, 255, 255, 0)
            
            # Check neighbors
            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                nx, ny = x + dx, y + dy
                if 0 <= nx < width and 0 <= ny < height and (nx, ny) not in visited:
                    visited.add((nx, ny))
                    stack.append((nx, ny))
                    
    img.save(output_path, "PNG")

input_file = "/Users/lebron/.gemini/antigravity/brain/71a4ec84-a8e8-4d6f-bfd5-f856acbbfb71/media__1781337087535.png"
output_file = "/Users/lebron/antigrav/grace-engineering/public/grace_logo.png"

remove_outer_bg(input_file, output_file, threshold=220)
print("Saved transparent logo (preserving inner white) to", output_file)
