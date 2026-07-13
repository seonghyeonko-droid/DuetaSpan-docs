# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "연준",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-13",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-07-20",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 해왕성을 발견하지 않은 사람은 누구인가요? | S2 아, 갈릴레오! 맞아요, 그분은 유명하죠. —그런데, 요즘 날 | S3 이번 주말에 가족들이랑 어디 갈지 고민 중인데, 추천해 줄 만 | S4 …아니, 그냥 조용하고 편안하게 쉴 수 있는 곳이면 좋겠어요.

     0.00s  user  발화 시작: 해왕성을 발견하지 않은 사람은 누구인가요?
     2.21s  <ret> 발화 (turn1 첫 프레임)
     2.53s  agent 발화 시작: <ret> 아, 그 부분은 아직 정확하게 알려진 바가 없네요. 누가 해왕성을 발견하지 않았는지에 대한 기록은
     2.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.60s]: (no information found)
     2.53s  user  발화 끝
    11.13s  user  발화 시작: 음… 그렇군요. 혹시 다른 행성은 누가 발견했는지 알려줄 수 있을까요?
    11.13s  agent 발화 끝
    15.87s  <ret> 발화 (turn3 첫 프레임)
    16.19s  agent 발화 시작: <ret> 갈릴레오 갈릴레이가 천육백십년에 목성의 가장 큰 네 개의 위성인 이오, 유로파, 가니메데, 칼리스
    16.19s  ⚡SPAN 주입 [d'=1.36s / d_lead=10.63s]: Galileo Galilei is credited with discovering the four largest moons of
    16.19s  user  발화 끝
    26.82s  user  발화 시작: 예.
    26.82s  agent 발화 끝
    27.33s  user  발화 시작: 아, 갈릴레오! 맞아요, 그분은 유명하죠. —그런데, 요즘 날씨는 어때요?
    27.33s  user  발화 끝
    31.80s  <ret> 발화 (turn6 첫 프레임)
    31.88s  agent 발화 시작: <ret> 지금 기온은 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로미터로 불고 있어요.
    31.88s  user  발화 끝
    32.84s  ⚡SPAN 주입 [d'=1.04s / d_lead=1.52s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    37.95s  user  발화 시작: 그렇죠.
    37.95s  agent 발화 끝
    38.46s  agent 발화 시작: 오늘 하루도 활기차게 보내세요! 혹시 다른 계획이 있으신가요?
    38.46s  user  발화 끝
    42.51s  user  발화 시작: 이번 주말에 가족들이랑 어디 갈지 고민 중인데, 추천해 줄 만한 곳이 있을까요?
    42.51s  agent 발화 끝
    48.58s  agent 발화 시작: 가족들과 함께 가기 좋은 곳을 찾으시는군요. —어떤 종류의 활동을 좋아하시는지 알려주시면 더욱…
    48.58s  user  발화 끝
    54.65s  user  발화 시작: 예.
    54.65s  agent 발화 끝
    55.16s  user  발화 시작: …아니, 그냥 조용하고 편안하게 쉴 수 있는 곳이면 좋겠어요. 바닷가 근처면 더 좋고요.
    55.16s  user  발화 끝
    61.66s  <ret> 발화 (turn13 첫 프레임)
    61.74s  agent 발화 시작: <ret> 조용하고 편안하게 쉴 수 있는 곳, 특히 바닷가 근처를 원하시는군요. 알겠습니다.
    61.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.57s]: Jeju Island is a volcanic island, known for its beaches, lava tubes, a
    61.74s  user  발화 끝
    67.30s  agent 발화 시작: 제주도는 화산섬으로 해변, 용암 동굴, 한라산 등 아름다운 자연과 휴식을 즐길 수 있는 곳으로 유명해요.
    67.30s  agent 발화 끝
    74.90s  agent 발화 끝
