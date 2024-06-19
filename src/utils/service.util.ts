import fs from 'fs';
import path from 'path';

class ServiceUtil {
  private dbPath: string;

  constructor() {
    this.dbPath = path.resolve(__dirname, '../db.json');
    this.ensureFileExists();
  }

  private ensureFileExists() {
    try {
      if (!fs.existsSync(this.dbPath)) {
        fs.writeFileSync(this.dbPath, JSON.stringify([]));
      }
    } catch (error) {
      console.error('Error creating JSON file: ', error);
    }
  }

  readJSONFile() {
    try {
      const data = fs.readFileSync(this.dbPath);
      return JSON.parse(data.toString());
    } catch (error) {
      console.error('Error reading JSON file: ', error);
      return [];
    }
  }

  writeJSONFile(data: any) {
    try {
      fs.writeFileSync(this.dbPath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error writing to JSON file:', error);
    }
  }
}

export default ServiceUtil;