import localFont from 'next/font/local';

const beni = localFont({
    src: [
        {
            path: './BeniRegular.woff2',
            weight: '400',
        },
        {
            path: './BeniLight.woff2',
            weight: '300',
        },
        {
            path: './BeniBold.woff2',
            weight: '700',
        },
        {
            path: './BeniBlack.woff2',
            weight: '800',
        },

    ],
    variable: '--font-beni'
})

export default beni