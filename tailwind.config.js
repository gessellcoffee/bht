// tailwind.config.js
module.exports = {
    theme: {
        colors: {
            'primary':   '#ec008c',
            'secondary': '#00aeef',
            'tertiary': '#000082',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Orelega One', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            backgroundImage: {
                bannerImg: "url('/backdrop.png')"
            }
        }
    }
}