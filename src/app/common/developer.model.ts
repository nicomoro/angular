import { Skill } from './skill.model';

export class Developer {
    lastName: string;
    firstName: string;
    age: number;
    sexe: string;
    bio: string;
    skill: Skill [] = [];

    constructor(lastName: string, firstName: string, age: number, sexe: string, bio: string, skill) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.sexe = sexe;
        this.bio = bio;
        this.skill = skill;

    }
}