# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "세국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 사용자 일 이삼이 버튼 클릭 이벤트를 기록해 줘. | S2 잠깐만. 지난달에 예약했던 호텔… | S3 응, 보내 줘. | S4 오, 좋아 보여.

     0.00s  user  발화 시작: 사용자 일 이삼이 버튼 클릭 이벤트를 기록해 줘.
     3.19s  <ret> 발화 (turn1 첫 프레임)
     3.35s  agent 발화 시작: <ret> 죄송하지만, 해당 웹페이지에서 정보를 찾을 수 없었어요. 다시 확인해 주시겠어요?
     3.35s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.79s]: (no information found)
     3.51s  user  발화 끝
     6.73s  user  발화 시작: 응.
     6.95s  user  발화 끝
     9.15s  agent 발화 끝
     9.48s  user  발화 시작: 음… 다시 해 봐.
    10.56s  <ret> 발화 (turn4 첫 프레임)
    10.88s  agent 발화 시작: <ret> 다시 시도했지만, 여전히 해당 정보를 찾을 수 없네요. 다른 방식으로 요청해 주시겠어요?
    10.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.10s]: (no information found)
    11.00s  user  발화 끝
    13.29s  user  발화 시작: 어.
    13.92s  user  발화 끝
    15.98s  agent 발화 끝
    16.07s  user  발화 시작: 아, 그래? 그럼 그냥 오늘 날씨 어때?
    18.14s  <ret> 발화 (turn7 첫 프레임)
    18.54s  agent 발화 시작: <ret> 서울의 현재 날씨는 기온이 이십삼도, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터로 측정되었어
    18.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    18.66s  user  발화 끝
    21.61s  user  발화 시작: 음.
    21.92s  user  발화 끝
    25.82s  agent 발화 끝
    25.83s  agent 발화 시작: 오늘 하루도 시원하게 보내시길 바랄게요. 혹시 다른 정보가 필요하신가요?
    29.90s  agent 발화 끝
    30.12s  user  발화 시작: 잠깐만. 지난달에 예약했던 호텔…
    33.03s  user  발화 끝
    34.07s  user  발화 시작: …예약 확인 좀 해 줘.
    35.25s  <ret> 발화 (turn12 첫 프레임)
    35.33s  agent 발화 시작: <ret> 지난달 예약하신 호텔 예약 확인 결과, 확인 번호는 팔 칠 육 오 사 삼 이 일입니다.
    35.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: (tool result) Confirmation ID: 87654321
    35.54s  user  발화 끝
    40.50s  agent 발화 시작: 예약 내역을 문자로 보내드릴까요?
    40.52s  agent 발화 끝
    42.81s  agent 발화 끝
    42.91s  user  발화 시작: 응, 보내 줘.
    43.79s  <ret> 발화 (turn15 첫 프레임)
    43.87s  agent 발화 시작: <ret> 예약 확인 메시지를 보내드렸습니다.
    43.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.59s]: (tool result) Message sent
    44.05s  user  발화 끝
    45.99s  user  발화 시작: 아, 고마워. 그럼… 내가 칠월 십오일에 중요한 미팅이 있는데, 그날 날씨가 어때?
    46.45s  agent 발화 끝
    51.95s  <ret> 발화 (turn17 첫 프레임)
    52.19s  agent 발화 시작: <ret> 칠월 십오일 서울의 예상 날씨는 기온이 이십팔 점 오도, 습도는 육십오%, 바람은 시속 칠 점 이
    52.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: (tool result) 28.5°C, humidity 65%, wind 7.2 km/h, partly cloudy
    52.34s  user  발화 끝
    61.88s  agent 발화 끝
    61.93s  agent 발화 시작: 중요한 미팅이 있으신 날씨까지 확인해 드리니, 마음 편히 준비하실 수 있겠네요.
    64.85s  user  발화 시작: 응.
    65.26s  user  발화 끝
    66.75s  agent 발화 끝
    67.02s  user  발화 시작: 그럼, 그날 근처에 괜찮은 레스토랑도 찾아줄 수 있어?
    69.97s  <ret> 발화 (turn21 첫 프레임)
    70.37s  agent 발화 시작: <ret> 미팅 근처에 있는 괜찮은 레스토랑으로 '더 가든'이라는 이탈리아 식당이 있어요. 평점은 사 점 오
    70.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: (tool result) Restaurant: The Garden; Cuisine: Italian; Rating: 4.5 st
    70.49s  user  발화 끝
    74.61s  user  발화 시작: 그래.
    75.24s  user  발화 끝
    77.12s  user  발화 시작: 오, 좋아 보여.
    77.13s  agent 발화 끝
    78.77s  agent 발화 시작: 분위기도 좋고, 음식 맛도 훌륭하다고 하네요. 미리 예약해 드릴까요?
    78.77s  user  발화 끝
    82.61s  user  발화 시작: 아니, 괜찮아. 그냥 알려줘서 고마워.
    82.65s  agent 발화 끝
    85.37s  agent 발화 시작: 도움이 되었다니 기쁘네요.
    85.52s  user  발화 끝
    86.94s  agent 발화 끝
