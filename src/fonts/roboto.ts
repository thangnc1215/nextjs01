import localFont from 'next/font/local';

const roboto = localFont({
    src: [
        {
            path: './Roboto-Regular.ttf',
            weight: '400',
        },
        {
            path: './Roboto-Light.ttf',
            weight: '300',
        },
        {
            path: './Roboto-Medium.ttf',
            weight: '600',
        },
        {
            path: './Roboto-Bold.ttf',
            weight: '700',
        },
        {
            path: './Roboto-Black.ttf',
            weight: '800',
        },

    ],
    variable: '--font-roboto'
})

export default roboto