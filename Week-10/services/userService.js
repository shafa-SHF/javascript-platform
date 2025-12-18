// services/userService.js
const prisma = require('../utils/prisma'); 
const { NotFoundError } = require('../utils/errors');

exports.getUserById = async (id) => {
  const user = await prisma.user.findUnique({ 
    where: { id },
    select: { id: true, username: true, email: true, role: true, createdAt: true }
  }); 
  
  if (!user) {
    throw new NotFoundError('User not found');
  }
  return user;
};

exports.getAllUsers = async () => {
  return prisma.user.findMany({
    select: { id: true, username: true, email: true, role: true, createdAt: true }
  });
};

exports.updateUser = async (id, updateData) => {
  if (updateData.password) delete updateData.password;
  if (updateData.role) delete updateData.role; 

  try {
    const user = await prisma.user.update({
      where: { id },
      data: updateData,
      select: { id: true, username: true, email: true, role: true, createdAt: true }
    });
    return user;
  } catch (error) {
    if (error.code === 'P2025') { // Record to update not found
        throw new NotFoundError('User not found');
    }
    throw error;
  }
};

exports.deleteUser = async (id) => {
  try {
    await prisma.user.delete({ where: { id } });
    return { message: 'User successfully deleted' };
  } catch (error) {
    if (error.code === 'P2025') { // Record to delete not found
      throw new NotFoundError('User not found');
    }
    throw error;
  }
};