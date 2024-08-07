// middleware/role.js
const adminOnly = (req, res, next) => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Access Denied: Admins Only' });
    }
    next();
  };

  
  const superAdminOnly = (req, res, next) => {
    if (!req.user.isSuperAdmin) {
      return res.status(403).json({ message: 'Access Denied: SuperAdmins Only' });
    }
    next();
  };
  
  module.exports = { adminOnly,superAdminOnly };
  