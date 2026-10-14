# 김치마트 YouTube(@kimchimarttv) 최신 영상 4개를 assets/videos.json 으로 저장
# GitHub Actions 가 몇 시간마다 실행함 (.github/workflows/update-videos.yml)
import json, re, urllib.request, xml.etree.ElementTree as ET

CHANNEL_ID = "UC6PTaXKmzkWzKPI--eNSvyA"
COUNT = 4
NS = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}

req = urllib.request.Request(
    f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}",
    headers={"User-Agent": "Mozilla/5.0"})
root = ET.fromstring(urllib.request.urlopen(req, timeout=30).read())

videos = []
for e in root.findall("a:entry", NS):
    vid = e.findtext("yt:videoId", namespaces=NS)
    title = (e.findtext("a:title", namespaces=NS) or "").strip()
    title = re.sub(r"\s*#\S*", "", title).strip()          # #Shorts 같은 해시태그 제거
    if not vid or not title or re.fullmatch(r"[\w\s,.]*\d{4}", title):  # 날짜만 있는 제목은 건너뜀
        continue
    videos.append({"id": vid, "title": title,
                   "published": e.findtext("a:published", namespaces=NS)})
    if len(videos) == COUNT:
        break

if len(videos) < COUNT:
    raise SystemExit(f"only {len(videos)} videos found — keeping the old file")

with open("assets/videos.json", "w", encoding="utf-8") as f:
    json.dump(videos, f, ensure_ascii=False, indent=1)
print("\n".join(v["id"] + "  " + v["title"] for v in videos))
