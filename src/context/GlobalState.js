import { atom } from 'recoil';

export const environmentAtom = atom({
    key: "enivironmentAtom",
    default: "create-react-app"
});

export const buildToolAtom = atom({
    key: "buildToolAtom",
    default: "yarn"
});

export const projectNameAtom = atom({
    key: "projectNameAtom",
    default: "my-app"
});

export const routeAtom = atom({
    key: "routeAtom",
    default: {
        enabled: false,
        navigation: "Home"
    }
});

export const componentsAtom = atom({
    key: "componentsAtom",
    default: [
        {
            id: 0,
            name: "Home",
            type: "FunctionalArrow",
            page: true  
        },
        {
            id: 1,
            name: "NavBar",
            type: "FunctionalArrow",
            page: false
        }
    ]
});