import entry from './models/mock-db/diary.json';

dotenv.config();

class DiaryController {
  static getEntries(req, res) {
    res.json({
      entries: diary,
    });
  }
}




export default DiaryController