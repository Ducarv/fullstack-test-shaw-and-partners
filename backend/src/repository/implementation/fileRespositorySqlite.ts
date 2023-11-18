import { Readable } from "stream";
import readLine from "readline";
import { File } from "../../domain/entities/File";
import { prisma } from "../../infra/database/prisma/prisma";
import { User } from "../../domain/entities/User";

export class FileRepositorySQLite {
    async upload(data: File) {
        try {
            if (!data) {
                throw new Error("Data is missing");
            }

            const savedFile = await prisma.file.create({
                data: {
                    ...data
                }
            })

            const { buffer } = savedFile;

            const readbleFile = new Readable();
            readbleFile.push(buffer);
            readbleFile.push(null);

            const usersLine = readLine.createInterface({
                input: readbleFile
            })

            const users: User[] = [];

            for await (let user of usersLine) {
                const userLineSplit = user.split(",")

                users.push({
                    name: userLineSplit[0],
                    city: userLineSplit[1],
                    country: userLineSplit[2],
                    favorite_sport: userLineSplit[3]
                })
            }

            for await (let { name, city, country, favorite_sport } of users) {
                await prisma.user.create({
                   data: {
                    name,
                    city,
                    country,
                    favorite_sport
                   } 
                })
            } 
    
            return savedFile;
        } catch(error: unknown) {
            if(error instanceof Error) {
                throw new Error(error.message);
            }
        }
    }
}