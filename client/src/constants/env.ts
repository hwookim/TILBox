const loadEnvironment = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`환경변수 ${key}가 설정되지 않음`);
  }
  return value;
};

const ENV = {
  ADMIN_USER_NICKNAME: loadEnvironment('ADMIN_USER_NICKNAME'),
};

export default ENV;
