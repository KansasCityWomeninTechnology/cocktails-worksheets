1. Add the following to the top of _styles.css_.
    
    {% filename %}styles.css{% endfilename %}
    ```css
    /* Reset */
    html, body, div, h1, h2, h3, h4, h5, h6, p, a,
    img, li, aside, footer, nav, section {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
    }
    ```

    The webpage now uses 100% of the width of the browser tab. But our drink menu doesn't look quite right! This is because there's not enough height in the element to fix the images. We'll fix it up soon.