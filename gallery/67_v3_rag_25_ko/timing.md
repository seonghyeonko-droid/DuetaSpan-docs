# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "우형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음, 요즘 노래 뭐 듣고 있어? | S2 호지어? 이름이 처음 듣는 것 같은데. | S3 아일랜드 출신이구나. 그럼 그 앨범 이름이 뭐야? | S4 아, 그렇구나. 혹시 지금 서울 날씨 어때?

     0.00s  user  발화 시작: 음, 요즘 노래 뭐 듣고 있어?
     1.55s  agent 발화 시작: 저는 사람들의 감성을 어루만지는 음악을 좋아해요. 요즘은 특히 편안한 멜로디가 좋은 것 같아요.
     1.75s  user  발화 끝
     7.81s  agent 발화 끝
     7.89s  user  발화 시작: 아, 그래? 혹시 아일랜드 차트…
    10.61s  user  발화 끝
    11.73s  user  발화 시작: …이위곡 알아? "From Eden"이라는 노래.
    13.86s  <ret> 발화 (turn4 첫 프레임)
    14.25s  agent 발화 시작: <ret> "From Eden"은 아일랜드 싱어송라이터 호지어의 노래이고, 이천십사년 구월 십구일에 그의 데
    14.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: "From Eden" is a song by Irish singer-songwriter Hozier, released as t
    14.31s  user  발화 끝
    22.99s  user  발화 시작: 호지어? 이름이 처음 듣는 것 같은데.
    23.20s  agent 발화 끝
    25.42s  user  발화 끝
    25.44s  agent 발화 시작: 호지어는 독특한 음색과 깊이 있는 가사로 많은 사랑을 받는 아티스트예요.
    30.27s  user  발화 시작: 잠깐만, 이천십사년이라고? 그거 좀 오래된 노래잖아.
    30.39s  agent 발화 끝
    34.11s  user  발화 끝
    34.33s  agent 발화 시작: 시간이 참 빠르죠. 좋은 음악은 시간이 지나도 빛을 발하는 것 같아요.
    37.72s  user  발화 시작: 음.
    38.21s  user  발화 끝
    38.94s  agent 발화 시작: 호지어는 아일랜드 출신으로, 그의 음악은 종교적 이미지와 인간의 감정을 섬세하게 표현하는 것으로 알려져 있어
    39.05s  agent 발화 끝
    43.96s  user  발화 시작: 응.
    44.31s  user  발화 끝
    46.21s  agent 발화 끝
    47.04s  user  발화 시작: 아일랜드 출신이구나. 그럼 그 앨범 이름이 뭐야?
    49.86s  <ret> 발화 (turn13 첫 프레임)
    50.01s  agent 발화 시작: <ret> 호지어는 아일랜드 싱어송라이터 호지어의 데뷔 스튜디오 앨범이고, 이천십사년 삼월 십칠일에 Ruby
    50.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.92s]: Hozier is the debut studio album by Irish singer-songwriter Hozier, re
    50.19s  user  발화 끝
    57.93s  agent 발화 끝
    58.35s  user  발화 시작: 삼월 십칠일이라고? 뭔가 기념일 같기도 하고.
    61.91s  agent 발화 시작: 아일랜드의 성 패트릭 데이가 바로 삼월 십칠일이랍니다.
    62.00s  user  발화 끝
    65.57s  agent 발화 끝
    65.83s  user  발화 시작: 아, 그렇구나. 혹시 지금 서울 날씨 어때?
    68.32s  <ret> 발화 (turn17 첫 프레임)
    68.71s  agent 발화 시작: <ret> 지금 서울은 이십삼°C이고, 습도는 칠십사%, 바람은 시속 오 점 오km로 불고 있어요.
    68.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    68.89s  user  발화 끝
    75.85s  agent 발화 끝
    76.50s  user  발화 시작: 꽤 덥겠네. 에어컨 켜야겠다.
    78.32s  agent 발화 시작: 더운 날씨에는 시원한 곳에서 휴식을 취하는 것도 좋은 방법이에요.
    78.34s  user  발화 끝
    82.77s  agent 발화 끝
