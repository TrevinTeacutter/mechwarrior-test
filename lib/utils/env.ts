interface ServerEnv {
  HOT_JAR_SITE_ID: number;
  HOT_JAR_VERSION: number;
}

const pitch = (message: string) => {
  throw new Error(message);
};

/**
 * Get required server environment variables and parse any JSON or number values. Throws an error if any required environment variables are missing or invalid.
 * @returns {Env} - The required and parsed environment variables
 */
export const getServerEnv = (): ServerEnv => {
  const {
    HOT_JAR_SITE_ID = pitch('HOT_JAR_SITE_ID missing from env'),
    HOT_JAR_VERSION = pitch('HOT_JAR_VERSION missing from env'),
  } = process.env;

  const PARSED_HOT_JAR_VERSION = parseInt(HOT_JAR_VERSION.trim(), 10);
  const PARSED_HOT_JAR_SITE_ID = parseInt(HOT_JAR_SITE_ID.trim(), 10);

  return {
    HOT_JAR_SITE_ID: PARSED_HOT_JAR_SITE_ID,
    HOT_JAR_VERSION: PARSED_HOT_JAR_VERSION,
  };
};
