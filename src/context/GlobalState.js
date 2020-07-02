import { atom } from 'recoil';

export const environmentAtom = atom({
    key: "enivironmentAtom",
    default: "create-react-app",
    persistence_UNSTABLE: {
        type: 'log'
    }
});

export const dependenciesToAddAtom = atom({
    key: "dependenciesToAddAtom",
    default: "react-router-dom",
    persistence_UNSTABLE: {
        type: 'log'
    }
});

export const buildToolAtom = atom({
    key: "buildToolAtom",
    default: "yarn",
    persistence_UNSTABLE: {
        type: 'log'
    }
});

export const projectNameAtom = atom({
    key: "projectNameAtom",
    default: "my-app",
    persistence_UNSTABLE: {
        type: 'log'
    }
});

export const routeAtom = atom({
    key: "routeAtom",
    default: {
        enabled: false,
        navigation: "NavBar"
    },
    persistence_UNSTABLE: {
        type: 'log'
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
    ],
    persistence_UNSTABLE: {
        type: 'log'
    }
});