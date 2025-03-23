# April Wang Portfolio (with Cinematic Video Intro)

This repository hosts April Wang’s original portfolio website design, enhanced with a cinematic fullscreen hero video intro.

## Features

- Original portfolio code fully preserved
- Cinematic fullscreen video intro (plays once, fades into site)
- Easily replaceable video source (currently using royalty-free CDN video)

## Replace Hero Video

Replace the `src` attribute in `index.html` with your desired video URL (Xiaohongshu or custom):

```html
<source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4">
```

Ensure your video URL supports CORS and direct embedding.

## Deployment on Vercel

- Import repository to [Vercel.com](https://vercel.com)
- Framework Preset: `Other`
- Output Directory: `.`
- No build command required

## License

Portfolio design © 2024 April Wang. Video from Pixabay (free for commercial use).