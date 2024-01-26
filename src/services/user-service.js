const prisma = require("../config/prisma");

exports.getUserById = (id) => {
  return prisma.user.findFirst({
    where: {
      id,
    },
  });
};

exports.getUserByEmail = (email)=>{
  return prisma.user.findFirst({
    where:{
      email,
    }
  })
}

exports.crateUser = (email, password) =>{
  return prisma.user.create({
    data:{
      email,
      password,
    }
  })
}
