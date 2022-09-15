const uuid = require("uuid");
const accomodations = require("../models/accomodations.models");
const places = require("../models/places.models");
const user = require("../models/users.models");

const getAllAccomodations = async () => {
  // const data = await accomodations.findAll({
  //     include: {
  //         model: places,
  //         attributes: {
  //             exclude: ['createdAt', 'updatedAt']
  //         }
  //     },
  //     attributes: {
  //         exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
  //     }
  // })

  const data = await accomodations.findAll({
    include: [
      {
        model: user,
        as: "user",
      },
      {
        model: places,
      },
    ],
  });

  return data;
};

const getAccomodationById = async (id) => {
  const data = await accomodations.findOne({
    where: {
      id,
    },
    include: [
      {
        model: places,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      {
        model: user,
        as: "user",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt", "userId", "placeId", "hostId"],
    },
  });
  return data;
};

const createAccomodations = async (data, hostId, placeId) => {
  const { score, ...restOfData } = data;
  const newAccommodations = await accomodations.create({
    ...restOfData,
    id: uuid.v4(),
    hostId: hostId,
    placeId: placeId,
  });
  return newAccommodations;
};


const editAccomodations = async (accmmId, data) => {
  const {id, score, ...restOfProperties } = data
  const newData = await accomodations.update(restOfProperties, {
      where: {
        id: accmmId,
      }
  })
  return newData
}

const deleteAccommodations = async (id) => {
  const data = await accomodations.destroy({
    where: {
      id: id
    }
  })
  return data
}

module.exports = {
  getAllAccomodations,
  getAccomodationById,
  createAccomodations,
  editAccomodations,
  deleteAccommodations
};
