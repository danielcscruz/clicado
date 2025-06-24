import { ref } from 'vue';

export const account = ref([
    {
        name: 'Minha Conta',
        link: '/account'
    },{
        name: 'Meus Dados',
        link: '/accountdetails'
    },
    {
        name: 'Meu Carrinho',
        link: '/mycart'
    }, 
    {
        name: 'Meus Pedidos',
        link: '/myorders'
    }
]
)
export const home = ref([
    {
        name: 'Explore',
        link: '/explore-two'
    },
    {
        name: 'Live Auction',
        link: '/auction'
    },
    {
        name: 'Activities',
        link: '/activity'
    },
    {
        name: 'Wallet',
        link: '/wallet'
    },
    {
        name: 'Creators',
        link: '/creators'
    },
])

export const community = ref([
    {
        link: '/aboutus',
        name: 'About Us'
    },
    {
        link: '/blogs',
        name: 'Blog'
    },
    {
        link: '/terms',
        name: 'Terms & Conditions'
    },
    {
        link: '/privacy',
        name: 'Privacy Policy'
    },
    {
        link: '/login',
        name: 'Login'
    },
    {
        link: '',
        name: 'Subscribe'
    },
    {
        link: '/contact',
        name: 'Contact'
    },
])