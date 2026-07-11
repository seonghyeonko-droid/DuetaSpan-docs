# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "민정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-18",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-11-16",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 비트코인 가격이 지금 얼마예요? | S2 거긴 가봤어요. 다른 데는 없을까요? | S3 칠월 십일일이요? 저는 칠월 십이일이라고 했는데요— | S4 익선동 한옥마을은 좋네요. 거기 근처에 맛있는 식당도 있나요?

     0.00s  user  발화 시작: 비트코인 가격이 지금 얼마예요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.00s  <ret> 발화 (turn9 첫 프레임)
     0.00s  <ret> 발화 (turn11 첫 프레임)
     0.01s  agent 발화 시작: <ret> 지금 비트코인 가격은 육만 칠천 팔백 구십이달러 오십센트이고, 지난 스물네시간 동안 이 점 삼% 
     0.01s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Bitcoin is currently trading at $67,892.50, with a 2.3% increase in th
     0.01s  user  발화 끝
     0.08s  user  발화 시작: 정말요?
     0.08s  agent 발화 끝
     0.09s  user  발화 시작: 음, 이더리움은요?
     0.09s  user  발화 끝
     0.09s  <ret> 발화 (turn7 첫 프레임)
     0.09s  agent 발화 시작: <ret> 이더리움은 현재 삼천 오백 육십칠달러 십이센트이고, 어제보다 일 점 팔% 올랐어요. 투자에 관심이
     0.09s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Ethereum is currently valued at $3,567.12, showing a 1.8% rise over th
     0.09s  user  발화 끝
     0.14s  user  발화 시작: 아.
     0.14s  agent 발화 끝
     0.14s  user  발화 시작: 아니요, 그냥 궁금해서요. 이번 주말에 서울 날씨는 어때요?
     0.14s  user  발화 끝
     0.16s  <ret> 발화 (turn13 첫 프레임)
     0.17s  agent 발화 시작: <ret> 서울 날씨는 현재 이십팔도이고 습도는 칠십팔%, 바람은 시속 사 점 일킬로미터입니다. 토요일과 일
     0.17s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Current weather in Seoul is 28.0°C, humidity 78%, wind 4
     0.17s  user  발화 끝
     0.23s  user  발화 시작: 주말에 비가 오면 실내에서 할 만한 거라도 찾아봐 줄래요?
     0.23s  agent 발화 끝
     0.23s  <ret> 발화 (turn16 첫 프레임)
     0.26s  agent 발화 시작: <ret> 국립중앙박물관은 한국 미술과 역사를 다양하게 전시하고 있고, 상설전은 무료로 관람할 수 있어요.
     0.26s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: The National Museum of Korea offers a diverse collection of Korean art
     0.26s  user  발화 끝
     0.30s  user  발화 시작: 거긴 가봤어요. 다른 데는 없을까요?
     0.30s  agent 발화 끝
     0.32s  agent 발화 시작: <ret> 서울의 코엑스 아쿠아리움에는 다양한 해양 생물과 체험 전시가 있고, 성인 티켓은 이만 팔천 원입니
     0.32s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: The COEX Aquarium in Seoul features a variety of marine life and inter
     0.32s  user  발화 끝
     0.37s  user  발화 시작: 아, 코엑스 아쿠아리움! 좋네요. 혹시 지금 가는 길이 막히진 않아요?
     0.37s  agent 발화 끝
     0.40s  agent 발화 시작: <ret> 코엑스 아쿠아리움으로 가는 길은 현재 약간 막히는 편이고, 예상 도착 시간은 삼십오분입니다.
     0.40s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Current traffic to COEX Aquarium indicates moderate cong
     0.40s  user  발화 끝
     0.44s  <ret> 발화 (turn20 첫 프레임)
     0.44s  user  발화 시작: 네.
     0.44s  agent 발화 끝
     0.44s  user  발화 시작: 삼십오분이면 괜찮아요. 이번 주 토요일에 예약할 수 있을까요?
     0.44s  user  발화 끝
     0.47s  agent 발화 시작: <ret> 코엑스 아쿠아리움 토요일, 칠월 십일일 오후 두시에 두명으로 예약이 완료되었습니다. 확인 번호는 
     0.47s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Reservation confirmed for COEX Aquarium on Saturday, Jul
     0.47s  user  발화 끝
     0.53s  <ret> 발화 (turn23 첫 프레임)
     0.53s  user  발화 시작: 음.
     0.53s  agent 발화 끝
     0.54s  user  발화 시작: 칠월 십일일이요? 저는 칠월 십이일이라고 했는데요—
     0.54s  user  발화 끝
     0.56s  user  발화 시작: …아쿠아리움 말고 다른 데도 예약 가능한 곳 알아봐 줄 수 있어요?
     0.56s  user  발화 끝
     0.59s  <ret> 발화 (turn25 첫 프레임)
     0.60s  agent 발화 시작: <ret> 롯데월드는 놀이기구, 아이스링크, 민속박물관 등 다양한 볼거리가 있고, 티켓 가격은 육만 이천 원
     0.60s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Lotte World offers a variety of attractions, including amusement park 
     0.60s  user  발화 끝
     0.64s  user  발화 시작: 네.
     0.64s  agent 발화 끝
     0.65s  user  발화 시작: 롯데월드는 사람이 너무 많을 것 같아요. 좀 더 조용한 곳은 없을까요?
     0.65s  user  발화 끝
     0.66s  <ret> 발화 (turn29 첫 프레임)
     0.69s  agent 발화 시작: <ret> 서울숲은 산책로, 정원, 문화 시설 등을 갖춘 넓은 도시 공원으로 무료로 입장할 수 있습니다.
     0.69s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: The Seoul Forest is a large urban park offering walking trails, garden
     0.69s  user  발화 끝
     0.73s  user  발화 시작: 서울숲은 가봤는데, 좀 심심하더라고요.
     0.73s  agent 발화 끝
     0.74s  <ret> 발화 (turn27 첫 프레임)
     0.75s  agent 발화 시작: <ret> 익선동 한옥마을은 전통 한옥을 개조한 트렌디한 카페, 식당, 상점들이 모여 있는 곳입니다.
     0.75s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: The Ikseon-dong Hanok Village features traditional Korean houses trans
     0.75s  user  발화 끝
     0.79s  user  발화 시작: 익선동 한옥마을은 좋네요. 거기 근처에 맛있는 식당도 있나요?
     0.79s  agent 발화 끝
     0.82s  agent 발화 시작: <ret> 익선동 한옥마을에 있는 "종로옥"은 전통 한국 요리, 특히 양념갈비로 유명하고, 가격은 이만 원에
     0.82s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: "종로옥" in Ikseon-dong Hanok Village is known for its traditional Korean
     0.82s  user  발화 끝
     0.87s  user  발화 시작: 양념갈비! 딱 좋네요. 혹시 지금 예약 가능한가요?
     0.87s  agent 발화 끝
     0.90s  agent 발화 시작: <ret> 종로옥 토요일, 칠월 십일일 저녁 일곱시에 두명으로 예약이 완료되었습니다. 확인 번호는 비 와이 
     0.90s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Reservation confirmed at Jongno-ok on Saturday, July 11,
     0.90s  user  발화 끝
     0.96s  user  발화 시작: 또 칠월 십일일이네요?
     0.96s  agent 발화 끝
     0.97s  agent 발화 시작: 죄송합니다. 날짜를 다시 확인해 볼게요. 칠월 십이일 저녁 일곱시로 변경하겠습니다.
     0.97s  user  발화 끝
     1.00s  agent 발화 끝
