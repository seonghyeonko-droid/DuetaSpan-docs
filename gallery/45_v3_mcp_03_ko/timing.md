# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "재영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-07-06",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때? | S2 …먹을 곳 좀 찾아줘. | S3 경복궁은…— | S4 고마워. 아이들 교육에 좋은 영화 추천해 줘.

     0.00s  user  발화 시작: 오늘 날씨 어때?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.00s  <ret> 발화 (turn10 첫 프레임)
     0.00s  <ret> 발화 (turn12 첫 프레임)
     0.01s  agent 발화 시작: <ret> 지금 기온은 이십육 점 일도이고, 습도는 육십팔퍼센트, 바람은 시속 삼 점 이킬로미터입니다. 날씨
     0.01s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Current conditions are 26.1°C, humidity 68%, wind 3.2 km
     0.01s  user  발화 끝
     0.06s  user  발화 시작: 응.
     0.06s  agent 발화 끝
     0.07s  user  발화 시작: 그럼 이번 주 토요일 날씨는 어때?
     0.07s  user  발화 끝
     0.09s  agent 발화 시작: <ret> 칠월 십일일 토요일은 기온이 이십팔 점 오도까지 올라가고 습도는 칠십이퍼센트이며, 바람은 시속 사
     0.09s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) The forecast for July 11, 2026 is 28.5°C, humidity 72%, 
     0.09s  user  발화 끝
     0.13s  <ret> 발화 (turn18 첫 프레임)
     0.16s  user  발화 시작: 아, 칠월 십일일은 아이들 학교 행사 있잖아.
     0.16s  agent 발화 끝
     0.19s  agent 발화 시작: 아, 아이들 학교 행사가 있군요. 잊지 않으셨다니 다행이에요.
     0.19s  user  발화 끝
     0.22s  user  발화 시작: 응.
     0.22s  agent 발화 끝
     0.22s  user  발화 시작: 그 행사 끝나고 저녁…
     0.22s  user  발화 끝
     0.23s  user  발화 시작: …먹을 곳 좀 찾아줘.
     0.23s  user  발화 끝
     0.25s  agent 발화 시작: <ret> 근처에 피자헛, 맥도날드, 아웃백 스테이크하우스, 서브웨이, 버거킹이 있습니다. 평점도 함께 알려
     0.25s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Found 5 restaurants near your location: Pizza Hut (Itali
     0.25s  user  발화 끝
     0.29s  user  발화 시작: 아웃백 스테이크하우스 예약해 줘. 일곱시에 네명.
     0.29s  agent 발화 끝
     0.31s  agent 발화 시작: <ret> 아웃백 스테이크하우스에 일곱시에 네명으로 예약이 완료되었습니다. 확인 번호는 팔 이 칠 엑스 구 
     0.31s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Reservation confirmed at Outback Steakhouse for 4 people
     0.31s  user  발화 끝
     0.36s  user  발화 시작: 대박.
     0.36s  agent 발화 끝
     0.36s  user  발화 시작: 아, 확인 번호는?
     0.36s  user  발화 끝
     0.37s  <ret> 발화 (turn30 첫 프레임)
     0.37s  <ret> 발화 (turn24 첫 프레임)
     0.38s  agent 발화 시작: 확인 번호는 팔 이 칠 엑스 구 일입니다. 다시 한번 말씀드릴까요?
     0.38s  user  발화 끝
     0.42s  user  발화 시작: 진짜?
     0.42s  agent 발화 끝
     0.42s  user  발화 시작: 됐어. 이번 주말에 가족 여행 갈만한 곳 좀 알려줘.
     0.42s  user  발화 끝
     0.45s  agent 발화 시작: <ret> 가족 여행으로 좋은 곳으로는 롯데월드, 에버랜드, 남산타워, 경복궁이 있습니다. 아이들이 좋아할 
     0.45s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Popular family attractions include Lotte World (theme pa
     0.45s  user  발화 끝
     0.50s  user  발화 시작: 경복궁은…—
     0.50s  agent 발화 끝
     0.50s  user  발화 시작: …거기 한복 대여하는 곳도 있어?
     0.50s  user  발화 끝
     0.52s  <ret> 발화 (turn27 첫 프레임)
     0.52s  agent 발화 시작: 네, 경복궁 근처에는 한복 대여하는 곳이 많이 있습니다.
     0.52s  user  발화 끝
     0.55s  agent 발화 시작: 경복궁에서 예쁜 한복을 입고 사진을 찍으면 정말 멋진 추억이 될 거예요.
     0.55s  agent 발화 끝
     0.59s  user  발화 시작: 그럼 경복궁 근처 한복 대여점 찾아줘.
     0.59s  agent 발화 끝
     0.61s  agent 발화 시작: <ret> 경복궁에서 백미터 거리에 있는 한복남 경복궁점이 있습니다. 다양한 종류의 한복을 대여할 수 있습니
     0.61s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Hanboknam 경복궁점 - 100m from Gyeongbokgung Palace, offers 
     0.61s  user  발화 끝
     0.62s  <ret> 발화 (turn32 첫 프레임)
     0.66s  user  발화 시작: 와.
     0.66s  agent 발화 끝
     0.66s  user  발화 시작: 그쪽으로 가는 대중교통 어떻게 타?
     0.66s  user  발화 끝
     0.68s  agent 발화 시작: <ret> 지하철 삼호선을 타고 경복궁역 오번 출구로 나오시면 됩니다. 걸어서 백미터 정도 걸립니다. 약 십
     0.68s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) Take subway line 3 to Gyeongbokgung Station, exit 5. Wal
     0.68s  user  발화 끝
     0.74s  user  발화 시작: 진짜?
     0.74s  agent 발화 끝
     0.74s  user  발화 시작: 고마워. 아이들 교육에 좋은 영화 추천해 줘.
     0.74s  user  발화 끝
     0.77s  agent 발화 시작: <ret> 현재 상영 중인 교육적인 영화로는 "인사이드 아웃 이", "소년과 헤라사기", 그리고 "플래닛 어
     0.77s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Currently showing: "Inside Out 2" (animated, emotional i
     0.77s  user  발화 끝
     0.82s  user  발화 시작: 인사이드 아웃 이 예매해 줘. 이번 주 토요일 오후 두시.
     0.82s  agent 발화 끝
     0.86s  agent 발화 시작: <ret> "인사이드 아웃 이" 영화 티켓 네장이 칠월 십일일 오후 두시에 예매되었습니다. 확인 번호는 구 
     0.86s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) 4 tickets purchased for "Inside Out 2" on July 11, 2026 
     0.86s  user  발화 끝
     0.93s  user  발화 시작: 이번 주말 계획 거의 다 세웠네.
     0.93s  agent 발화 끝
     0.95s  agent 발화 시작: 이번 주말 계획을 거의 다 세우셨다니 정말 다행입니다. 아이들과 즐거운 시간 보내세요!
     0.95s  user  발화 끝
     0.99s  user  발화 시작: 응, 고마워.
     0.99s  agent 발화 끝
     1.00s  user  발화 끝
