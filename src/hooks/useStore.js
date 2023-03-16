import { create } from "zustand";
import { nanoid } from "nanoid";


export const useStore = create(set => ({
    texture: 'dirt',
    cubes: [
        {
            id: nanoid(),
            pos: [1, 1, 1],
            texture: 'dirt'
        },
        {
            id: nanoid(),
            pos: [1, 4, 1],
            texture: 'log'
        }
    ],
    addCube: (x, y, z) => {
        set(state => ({
            cubes: [...set.cubes, {
                id: nanoid(),
                texture: state.texture,
                pos: [x, y, z]
            }]
        }))
    },
    removeCube: (x, y, z) => {
        /* set(state => ({
            cubes: state.cubes.filter(cube => {
                const [X, Y, Z] = cube.pos
                return X !== x || Y !== y || Z !== z
            })
        })) */
        set(state => ({
            cubes: state.cubes.filter(cube => cube.id !== id)
        }))
    },
    setTexture: (texture) => {
        set(() => ({texture}))
    },
    saveWorld: () => { },
    resetWorld: () => { }
}))