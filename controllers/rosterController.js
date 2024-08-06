import roster from "../models/rosterModel.js";


export const getRoster = async (req, res) => {
    try {
        const rosterList = await roster.findAll();
        res.status(200).json(rosterList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getRosterByName = async (req, res) => {
    const { params:{name} } = req;
    try {
        const rosterList = await roster.findAll({ where: { name } });
        res.status(200).json(rosterList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postRoster = async (req, res) => {
    const { name, image, type, height, weight, ability, experience, hp, attack, defense, specialAttack, specialDefense, speed } = req.body;
    try {
        const newRoster = await roster.create({ name, image, type, height, weight, ability, experience, hp, attack, defense, specialAttack, specialDefense, speed });
        res.status(201).json(newRoster);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const putRoster = async (req, res) => {
    const { image, type, height, weight, ability, experience, hp, attack, defense, specialAttack, specialDefense, speed } = req.body;
    const { params:{name} } = req;
    try {
        const updatedRoster = await roster.update({ image, type, height, weight, ability, experience, hp, attack, defense, specialAttack, specialDefense, speed }, { where: { name } });
        res.status(200).json(updatedRoster);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteRoster = async (req, res) => {
    const { params:{name}} = req;
    try {
        await roster.destroy({ where: { name } });
        res.status(200).json({ message: "Roster deleted successfully" });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}