OC.L10N.register(
    "news",
    {
    "Request failed, network connection unavailable!" : "הבקשה נכשלה, חיבור רשת לא זמין!",
    "Request unauthorized. Are you logged in?" : "בקשה לא מורשת. האם הנך מחובר/ת?",
    "Request forbidden. Are you an admin?" : "בקשה אסורה. האם הנך מנהל/ת?",
    "Token expired or app not enabled! Reload the page!" : "אישור פג תוקף או יישום לא מופעל! יש לטעון את הדף שוב!",
    "Feed contains invalid XML" : "ערוץ הזנת תוכן מכיל XML לא חוקי",
    "Feed not found: either the website does not provide a feed or blocks access. To rule out blocking, try to download the feed on your server's command line using curl: curl " : "ערוץ מידע לא נמצא: יתכן שהאתר לא מספק ערוץ תוכן או שהאתר מונע גישה. על מנת לשלול מניעת גישה על ידי האתר, מומלץ לנסות להוריד את ערוץ התוכן באמצעות שורת הפקודה של השרת תוך שימוש בשירות curl: curl",
    "Detected feed format is not supported" : "תצורה מזוהה של ערוץ תוכן אינה נתמכת",
    "Website not found" : "האתר לא אותר",
    "More redirects than allowed, aborting" : "מעל למכסה המותרת לניתוב מחדש, מבטל פעולה",
    "Bigger than maximum allowed size" : "גדול מהגודל המקסימלי המותר",
    "Request timed out" : "עבר הזמן שמוקצב לבקשה",
    "Required credentials for feed were either missing or incorrect" : "אישורי האימות לערוץ הזנת התוכן חסרים או אינם נכונים",
    "Forbidden to access feed" : "איסור גישה לערוץ הזנת התוכן",
    "Certificate error: A problem occurred somewhere in the SSL/TLS handshake. Could be certificates (file formats, paths, permissions), passwords, and others." : "שגיאת תעודת אימות: שגיאה אירעה במקום כלשהו בחתימת SSL/TLS. ייתכן ומדובר בתעודת אימות (תבניות קובץ, נתיבים, הרשאות), סיסמאות, וכדומה.",
    "Certificate error: The remote server's SSL certificate or SSH md5 fingerprint was deemed not OK." : "שגיאת תעודת אימות: תעודת אימות SSL בשרת המרוחק או תביעת האצבע SSH md5 הוכתרה כשגויה.",
    "Certificate error: Problem with the local client certificate." : "שגיאת תעודת אימות: בעייה בתעודת אימות של הלקוח המקומי.",
    "Certificate error: Couldn't use specified cipher." : "שגיאת תעודת אימות: לא ניתן היה להשתמש במקודד הנתון.",
    "Certificate error: Peer certificate cannot be authenticated with known CA certificates." : "שגיאת תעודת אימות: תעודת גישה אינה ניתנת לאימות באמצעות תעודות CA מוכרות.",
    "Certificate error: Requested FTP SSL level failed." : "שגיאת תעודת אימות: בקשת רמת FTP SSL נכשלה.",
    "Certificate error: Initiating the SSL Engine failed." : "שגיאת תעודת אימות: הנעת מנוע ה- SSL נכשלה.",
    "Certificate error: Problem with reading the SSL CA cert (path? access rights?)" : "שגיאת תעודת אימות: בעייה בקריאת את אימות ה- SSL CA (נתיב? הרשאות גישה?)",
    "Certificate error: Issuer check failed" : "שגיאת תעודת אימות: בדיקת מנפיק נכשלה.",
    "Unknown SSL certificate error!" : "שגיאת תעודת אימות SSL לא ידועה!",
    "Can not add feed: Exists already" : "לא ניתן להוסיף הזנת ערוץ תוכן: כבר קיים",
    "Articles without feed" : "מאמרים ללא ערוץ הזנת תוכן",
    "Can not add folder: Exists already" : "לא ניתן להוסיף תיקייה: כבר קיימת",
    "Disable this if you run a custom updater such as the Python updater included in the app" : "יש לנטרל את זה אם ברצונך להריץ מעדכן מותאם אישית כדוגמת עדכון Python המצורף ליישום",
    "Purge interval" : "מרווח להסרה ממסד הנתונים",
    "Minimum amount of seconds after deleted feeds and folders are removed from the database; values below 60 seconds are ignored" : "מספר שניות מינימלי לאחר שמחיקת הזנות תוכן ותיקיות מוסרות ממסד הנתונים; ערכים מתחת ל- 60 לא יכובדו",
    "Maximum read count per feed" : "מספר מקסימלי של שורות קריאה מערוץ הזנת תוכן",
    "Defines the maximum amount of articles that can be read per feed which won't be deleted by the cleanup job; if old articles reappear after being read, increase this value; negative values such as -1 will turn this feature off completely" : "מגדיר את מספר המאמרים המקסימלי שניתן לקרוא בערוץ מידע שלא ימחק על ידי מעבד הניקוי; אם מאמרים ישנים מופיעים מחדש לאחר שנקראו, יש להעלות ערך זה; ערך שלילי כגון -1 יכבה תכונה זו לחלוטין",
    "Maximum redirects" : "מספר ניתובים מירבי",
    "How many redirects the feed fetcher should follow" : "כמה ניתובים לעקוב מערוץ הזנת התוכן",
    "Maximum feed page size" : "גודל מקסימלי לדף ערוץ הזנת תוכן",
    "Maximum feed size in bytes. If the RSS/Atom page is bigger than this value, the update will be aborted" : "גודל דף ערוץ הזנת תוכן מקסימלי בבייטים. אם דף ה- RSS/Atom גדול מערך זה, ההעלאה תפסק.",
    "Feed fetcher timeout" : "עבר זמן מרבי להזנת ערוץ התוכן",
    "Maximum number of seconds to wait for an RSS or Atom feed to load; if it takes longer the update will be aborted" : "מספר מקסימלי של שניות שיש להמתין להעלאה של ערוץ מידע RSS או Atom; אם ימשך מעבר לערך זה תהליך העדכון יופסק",
    "Explore Service URL" : "חקירת נתיב שירות",
    "If given, this service's URL will be queried for displaying the feeds in the explore feed section. To fall back to the built in explore service, leave this input empty" : "אם ינתן, נתיב השירות יבחן בהצגת ערוצי המידע באזור חקירת ערוצי המידע. לחזרה לשירות החקירה המובנה, יש להשאיר שדה זה ריק",
    "For more information check the Wiki" : "למידע נוסף יש לבדוק את ה- Wiki",
    "Saved" : "נשמר",
    "Download" : "הורדה",
    "Close" : "סגירה",
    "Ajax or Web cron mode detected! Your feeds will not be updated!" : "התגלה מצב Ajax או Web cron! הזנת התוכן שלך לא תעודכן!",
    "How to set up the operating system cron" : "איך להגדיר את cron מערכת ההפעלה",
    "Install and set up a faster parallel updater that uses the News app's update API" : "התקנה והגדרת עדכון מקביל מהיר שמשתמש בעדכון יישום חדשות מבוסס API",
    "filter" : "סינון",
    "Language" : "שפה",
    "Subscribe" : "רישום",
    "Got more awesome feeds? Share them with us!" : "קבלת ערוצי מידע מדהימים נוספים? ניתן לשתף אותם איתנו!",
    "No articles available" : "אין מאמרים זמינים",
    "No unread articles available" : "אין מאמרים שלא נקראו זמינים",
    "Open website" : "פתיחת אתר אינטרנט",
    "Star article" : "סמן מאמר בכוכב",
    "Unstar article" : "הסרת סימון כוכב ממאמר",
    "Keep article unread" : "השארת מאמר עם סימון לא נקרא",
    "Remove keep article unread" : "ביטול השארת מאמר עם סימון לא נקרא",
    "by" : "על ידי",
    "from" : "מאת",
    "Play audio" : "השמע קובץ שמע",
    "Download video" : "הורדת וידאו",
    "Download audio" : "הורדת קובץ שמע",
    "Keyboard shortcut" : "קיצור מקלדת",
    "Description" : "תיאור",
    "right" : "ימין",
    "Jump to next article" : "קפיצה למאמר הבא",
    "left" : "שמאל",
    "Jump to previous article" : "קפיצה למאמר הקודם",
    "Toggle star article" : "החלפת מצב סימון מאמר בכוכב",
    "Star article and jump to next one" : "סימון מאמר בכוכב וקפיצה לבא אחריו",
    "Toggle keep current article unread" : "החלפת מצב סימון מאמר כלא נקרא",
    "Open article in new tab" : "פתיחת מאמר בכרטיסייה חדשה",
    "Toggle expand article in compact view" : "מעבר למאמר מורחק בתצוגה מצומצמת",
    "Refresh" : "רענון",
    "Load next feed" : "טעינת הזנת תוכן הבאה",
    "Load previous feed" : "טעינת הזנת תוכן קודמת",
    "Load next folder" : "טעינת תיקייה הבאה",
    "Load previous folder" : "טעינת תיקייה קודמת",
    "Scroll to active navigation entry" : "גלילה לרשומת ניווט פעילה",
    "Focus search field" : "מיקוד שדה חיפוש",
    "Mark current article's feed/folder read" : "סימון ערוץ מידע/תיקייה למאמר הנוכחי כנקראו",
    "Web address" : "כתובת אתר",
    "Feed exists already!" : "ערוץ הזנת התוכן כבר קיים!",
    "Folder" : "תיקייה",
    "No folder" : "אין תיקייה",
    "New folder" : "תיקייה חדשה",
    "Folder name" : "שם התיקייה",
    "Go back" : "חזרה",
    "Folder exists already!" : "התיקייה כבר קיימת!",
    "Advanced settings" : "הגדרות מתקדמות",
    "Credentials" : "פרטי גישה",
    "HTTP Basic Auth credentials must be stored unencrypted! Everyone with access to the server or database will be able to access them!" : "אישורי אימות HTTP בסיסיים חייבים להיות מאוחסנים ללא קידוד! כל אחד עם גישה לשרת או למסד הנתונים יוכלו לגשת אליהם!",
    "Username" : "שם משתמש",
    "Password" : "סיסמא",
    "New Folder" : "תיקייה חדשה",
    "Create" : "יצירה",
    "Explore" : "דפדוף",
    "Update failed more than 50 times" : "העדכון נכשל מעל 50 פעמים",
    "Deleted feed" : "מחיקת ערוץ תוכן",
    "Undo delete feed" : "ביטול מחיקת ערוץ תוכן",
    "Rename" : "שינוי שם",
    "Menu" : "תפריט",
    "Dismiss" : "שחרור",
    "Collapse" : "קיווץ",
    "Deleted folder" : "מחיקת תיקייה",
    "Undo delete folder" : "ביטול מחיקת תיקייה",
    "Starred" : "מסומן",
    "Unread articles" : "מאמרים שלא נקראו",
    "All articles" : "כל המאמרים",
    "Settings" : "הגדרות",
    "Disable mark read through scrolling" : "ניטרול סימון כנקרא בעקבות גלילה",
    "Compact view" : "תצוגה קומפקטית",
    "Expand articles on key navigation" : " תצוגת מאמר מורחב בתפריט ראשי ",
    "Show all articles" : "הצגת כל המאמרים",
    "Reverse ordering (oldest on top)" : "סידור הפוך (ישן למעלה)",
    "Subscriptions (OPML)" : "הרשמות (OPML)",
    "Import" : "יבוא",
    "Export" : "ייצוא",
    "Error when importing: file does not contain valid OPML" : "שגיאה ביבוא: הקובץ אינו מכיל OPML תקין",
    "Error when importing: OPML is does neither contain feeds nor folders" : "שגיאה בזמן יבוא: OPML אינו מכיל הזנות מידע או תיקיות",
    "Unread/Starred Articles" : "מאמרים שלא נקראו / סומנו ככוכב",
    "Error when importing: file does not contain valid JSON" : "שגיאה ביבוא: הקובץ אינו מכיל JSON תקין",
    "Help" : "עזרה",
    "Keyboard shortcuts" : "קיצורי מקלדת",
    "Documentation" : "תיעוד",
    "Report a bug" : "דיווח על באג"
},
"nplurals=2; plural=(n != 1);");
