# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "수진",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-10-10",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때요? | S2 그분이 폴 매카트니 앨범 작업에도 참여했나요? | S3 제가 이번 주 토요일에 영화를 보려고 하는데, 좋은 영화 추천 | S4 다음 주 화요일 오후 세시에 예약 가능한 곳을 찾아주세요.

     0.00s  user  발화 시작: 오늘 날씨 어때요?
     1.46s  <ret> 발화 (turn1 첫 프레임)
     1.53s  agent 발화 시작: <ret> 지금 기온은 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 불고 있어요. 오늘 
     1.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     1.61s  user  발화 끝
     8.48s  user  발화 시작: 음, 좋아요.
     8.49s  agent 발화 끝
     9.81s  user  발화 끝
     9.84s  agent 발화 시작: 혹시 다른 궁금한 점이 있으세요?
    11.69s  agent 발화 끝
    12.54s  user  발화 시작: 브라이언 키스 허비 플라워스라는 분이 누구세요?
    15.79s  <ret> 발화 (turn5 첫 프레임)
    15.86s  agent 발화 시작: <ret> 브라이언 키스 허비 플라워스는 첼로와 더블 베이스, 튜바를 전문으로 하는 영국의 음악가예요.
    15.87s  ⚡SPAN 주입 [d'=0.72s / d_lead=5.84s]: Brian Keith "Herbie" Flowers is an English musician specialising in el
    16.10s  user  발화 끝
    21.70s  agent 발화 끝
    21.78s  user  발화 시작: 아, 그렇군요.
    23.14s  agent 발화 시작: 음악 분야에 관심이 많으신가 봐요.
    23.16s  user  발화 끝
    24.92s  user  발화 시작: 그분이 폴 매카트니 앨범 작업에도 참여했나요?
    25.08s  agent 발화 끝
    27.54s  <ret> 발화 (turn9 첫 프레임)
    27.94s  agent 발화 시작: <ret> 네, 'Give My Regards to Broad Street'은 폴 매카트니의 다섯 번째 스튜
    27.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: Give My Regards to Broad Street is the fifth studio album by Paul McCa
    28.04s  user  발화 끝
    30.75s  user  발화 시작: 어머.
    31.48s  user  발화 끝
    35.83s  agent 발화 시작: 폴 매카트니와 함께 작업한 음악가들이 정말 많죠. —
    35.87s  agent 발화 끝
    37.92s  user  발화 시작: 그 앨범 말고 다른 앨범에도 참여했나요?
    38.70s  agent 발화 끝
    40.80s  agent 발화 시작: 폴 매카트니와 관련된 다른 앨범에 대한 정보는 지금 바로 확인해 볼게요.
    40.93s  user  발화 끝
    42.94s  user  발화 시작: 음.
    43.33s  user  발화 끝
    44.43s  user  발화 시작: 네, 부탁드려요.
    44.91s  agent 발화 끝
    45.91s  user  발화 끝
    45.96s  <ret> 발화 (turn16 첫 프레임)
    46.03s  agent 발화 시작: <ret> 브라이언 키스 허비 플라워스는 'All the Best!' (천구백팔십칠)과 'Chaos and 
    46.04s  ⚡SPAN 주입 [d'=1.04s / d_lead=9.41s]: (tool result) Brian Keith "Herbie" Flowers played bass on many recordi
    55.44s  user  발화 시작: 아, 그렇군요. 정말 다양한 앨범에 참여했네요.
    55.44s  agent 발화 끝
    59.40s  agent 발화 시작: 음악가의 세계는 넓고 깊어서, 끊임없이 새로운 발견이 있는 것 같아요.
    59.46s  user  발화 끝
    63.43s  agent 발화 끝
    63.52s  user  발화 시작: 제가 이번 주 토요일에 영화를 보려고 하는데, 좋은 영화 추천해 주실 수 있나요?
    68.52s  <ret> 발화 (turn20 첫 프레임)
    68.60s  agent 발화 시작: <ret> 이번 주 토요일에 상영하는 영화로는 '오펜하이머', '바비', '미션 임파서블: 데드 레코닝 파트
    68.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: (tool result) Oppenheimer, Barbie, Mission: Impossible - Dead Reckonin
    68.71s  user  발화 끝
    72.88s  user  발화 시작: 네.
    73.36s  user  발화 끝
    75.03s  user  발화 시작: 오펜하이머는 어떤 영화인가요?
    75.04s  agent 발화 끝
    76.68s  <ret> 발화 (turn23 첫 프레임)
    77.07s  agent 발화 시작: <ret> '오펜하이머'는 크리스토퍼 놀란 감독의 이천이십삼년 전기 스릴러 영화예요. 제이차 세계 대전 중 
    77.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.08s]: (tool result) Oppenheimer is a 2023 epic biographical thriller film di
    77.29s  user  발화 끝
    81.98s  user  발화 시작: 정말요?
    82.79s  user  발화 끝
    88.15s  agent 발화 끝
    88.50s  user  발화 시작: 흥미롭네요.
    89.42s  agent 발화 시작: 영화를 통해 역사를 배우는 것도 좋은 경험이 될 수 있겠죠.
    89.60s  user  발화 끝
    91.48s  user  발화 시작: 음.
    91.97s  user  발화 끝
    92.37s  agent 발화 끝
    93.61s  user  발화 시작: 혹시 제가 다음 주 화요일에 예약 가능한 마사지샵을 알아봐 주실 수 있나요?
    98.82s  agent 발화 시작: 마사지샵 예약은 제가 도와드릴 수 있지만, 정확한 날짜와 시간을 알려주셔야 해요.
    98.93s  user  발화 끝
   102.60s  user  발화 시작: 네.
   103.14s  user  발화 끝
   104.28s  agent 발화 끝
   105.67s  user  발화 시작: 다음 주 화요일 오후 세시에 예약 가능한 곳을 찾아주세요.
   109.83s  <ret> 발화 (turn32 첫 프레임)
   110.20s  user  발화 끝
   110.22s  agent 발화 시작: <ret> 'Serenity Spa'에서 다음 주 화요일 오후 세시에 예약이 가능하고, 확인 번호는 칠 에이
   110.23s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.93s]: (tool result) Serenity Spa - Available at 3:00 PM, confirmation ID: 7A
   113.31s  user  발화 시작: 네.
   113.95s  user  발화 끝
   115.94s  user  발화 시작: 감사합니다. 예약해 주세요.
   116.16s  agent 발화 끝
   117.74s  <ret> 발화 (turn35 첫 프레임)
   118.05s  agent 발화 시작: <ret> 'Serenity Spa'에서 이천이십육년 칠월 십사일 오후 세시에 예약이 확정되었고, 확인 번호
   118.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: (tool result) Appointment confirmed at Serenity Spa for July 14, 2026,
   118.19s  user  발화 끝
   125.25s  user  발화 시작: 정말 감사합니다. 덕분에 편안한 시간을 보낼 수 있겠네요.
   125.28s  agent 발화 끝
   129.14s  agent 발화 시작: 도움이 되었다니 다행이에요. 가끔은 자신을 위한 시간을 갖는 것이 중요하죠.
   129.41s  user  발화 끝
   133.49s  agent 발화 끝
