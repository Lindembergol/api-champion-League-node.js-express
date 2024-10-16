import PlayerModel from "../models/players-model"
import StatisticsModel from "../models/statistics-model"

const database: PlayerModel[] = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "club": "Inter Miami",
        "nationality": "Argentina",
        "position": "Forward",
        "statistics": {
            "Overall": 93,
            "Pace": 85,
            "Shooting": 92,
            "Passing": 91,
            "Dribbling": 95,
            "Defending": 38,
            "Physical": 65
        }
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "club": "Al Nassr",
        "nationality": "Portugal",
        "position": "Forward",
        "statistics": {
            "Overall": 92,
            "Pace": 89,
            "Shooting": 93,
            "Passing": 82,
            "Dribbling": 89,
            "Defending": 35,
            "Physical": 78
        }
    },
    {
        "id": 3,
        "name": "Kylian Mbappé",
        "club": "Paris Saint-Germain",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 97,
            "Shooting": 86,
            "Passing": 80,
            "Dribbling": 92,
            "Defending": 39,
            "Physical": 77
        }
    },
    {
        "id": 4,
        "name": "Robert Lewandowski",
        "club": "Barcelona",
        "nationality": "Poland",
        "position": "Forward",
        "statistics": {
            "Overall": 92,
            "Pace": 78,
            "Shooting": 94,
            "Passing": 78,
            "Dribbling": 86,
            "Defending": 43,
            "Physical": 82
        }
    },
    {
        "id": 5,
        "name": "Kevin De Bruyne",
        "club": "Manchester City",
        "nationality": "Belgium",
        "position": "Midfielder",
        "statistics": {
            "Overall": 91,
            "Pace": 76,
            "Shooting": 86,
            "Passing": 93,
            "Dribbling": 88,
            "Defending": 64,
            "Physical": 78
        }
    },
    {
        "id": 6,
        "name": "Mohamed Salah",
        "club": "Liverpool",
        "nationality": "Egypt",
        "position": "Forward",
        "statistics": {
            "Overall": 90,
            "Pace": 94,
            "Shooting": 86,
            "Passing": 81,
            "Dribbling": 90,
            "Defending": 45,
            "Physical": 75
        }
    },
    {
        "id": 7,
        "name": "Virgil van Dijk",
        "club": "Liverpool",
        "nationality": "Netherlands",
        "position": "Defender",
        "statistics": {
            "Overall": 90,
            "Pace": 78,
            "Shooting": 60,
            "Passing": 71,
            "Dribbling": 72,
            "Defending": 92,
            "Physical": 86
        }
    },
    {
        "id": 8,
        "name": "Luka Modrić",
        "club": "Real Madrid",
        "nationality": "Croatia",
        "position": "Midfielder",
        "statistics": {
            "Overall": 89,
            "Pace": 76,
            "Shooting": 75,
            "Passing": 90,
            "Dribbling": 91,
            "Defending": 70,
            "Physical": 66
        }
    },
    {
        "id": 9,
        "name": "Sergio Ramos",
        "club": "Sevilla",
        "nationality": "Spain",
        "position": "Defender",
        "statistics": {
            "Overall": 88,
            "Pace": 71,
            "Shooting": 64,
            "Passing": 75,
            "Dribbling": 72,
            "Defending": 88,
            "Physical": 84
        }
    },
    {
        "id": 10,
        "name": "Karim Benzema",
        "club": "Al-Ittihad",
        "nationality": "France",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 78,
            "Shooting": 89,
            "Passing": 83,
            "Dribbling": 87,
            "Defending": 42,
            "Physical": 79
        }
    },
    {
        "id": 11,
        "name": "Toni Kroos",
        "club": "Real Madrid",
        "nationality": "Germany",
        "position": "Midfielder",
        "statistics": {
            "Overall": 88,
            "Pace": 53,
            "Shooting": 81,
            "Passing": 90,
            "Dribbling": 82,
            "Defending": 69,
            "Physical": 68
        }
    },
    {
        "id": 12,
        "name": "Sadio Mané",
        "club": "Al Nassr",
        "nationality": "Senegal",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 91,
            "Shooting": 83,
            "Passing": 78,
            "Dribbling": 88,
            "Defending": 44,
            "Physical": 76
        }
    },
    {
        "id": 13,
        "name": "N'Golo Kanté",
        "club": "Al-Ittihad",
        "nationality": "France",
        "position": "Midfielder",
        "statistics": {
            "Overall": 90,
            "Pace": 77,
            "Shooting": 66,
            "Passing": 77,
            "Dribbling": 81,
            "Defending": 87,
            "Physical": 83
        }
    },
    {
        "id": 14,
        "name": "Erling Haaland",
        "club": "Manchester City",
        "nationality": "Norway",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 89,
            "Shooting": 93,
            "Passing": 65,
            "Dribbling": 81,
            "Defending": 45,
            "Physical": 88
        }
    },
    {
        "id": 15,
        "name": "Joshua Kimmich",
        "club": "Bayern Munich",
        "nationality": "Germany",
        "position": "Midfielder",
        "statistics": {
            "Overall": 89,
            "Pace": 70,
            "Shooting": 74,
            "Passing": 86,
            "Dribbling": 84,
            "Defending": 83,
            "Physical": 75
        }
    },
    {
        "id": 16,
        "name": "Jan Oblak",
        "club": "Atlético Madrid",
        "nationality": "Slovenia",
        "position": "Goalkeeper",
        "statistics": {
            "Overall": 91,
            "Pace": 45,
            "Shooting": 26,
            "Passing": 31,
            "Dribbling": 42,
            "Defending": 55,
            "Physical": 78
        }
    },
    {
        "id": 17,
        "name": "Harry Kane",
        "club": "Bayern Munich",
        "nationality": "England",
        "position": "Forward",
        "statistics": {
            "Overall": 89,
            "Pace": 73,
            "Shooting": 91,
            "Passing": 83,
            "Dribbling": 82,
            "Defending": 47,
            "Physical": 80
        }
    },
    {
        "id": 18,
        "name": "Neymar Jr.",
        "club": "Al Hilal",
        "nationality": "Brazil",
        "position": "Forward",
        "statistics": {
            "Overall": 91,
            "Pace": 91,
            "Shooting": 85,
            "Passing": 86,
            "Dribbling": 94,
            "Defending": 37,
            "Physical": 61
        }
    },
    {
        "id": 19,
        "name": "David Beckham",
        "club": "Retired",
        "nationality": "England",
        "position": "Midfielder",
        "statistics": {
            "Overall": 85,
            "Pace": 76,
            "Shooting": 82,
            "Passing": 90,
            "Dribbling": 84,
            "Defending": 70,
            "Physical": 72
        }
    }
]

export const findAllPlayer = async (): Promise<PlayerModel[]> => {
    return database
}

export const findPlayerById = async (id:number): Promise<PlayerModel | undefined> => {
    return database.find( player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
    database.push(player)
}

export const deleteOnePlayer = async (id: number) => {
    const index = database.findIndex( player => player.id === id)

    if (index !== -1) {
        database.splice(index, 1)
        return true
    }

    return false
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    //Find player
    const playerIndex = database.findIndex( player => player.id === id)

    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics
    }

    return database[playerIndex]
}