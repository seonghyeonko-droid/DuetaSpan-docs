# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "하재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명이에요? | S2 국민 의회 의원 수는 몇 명이죠? | S3 아니요, 괜찮아요. 그런데 요즘 날씨가 어때요? | S4 네, 감사합니다. 좋은 하루 보내세요.

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명이에요?
     1.92s  <ret> 발화 (turn1 첫 프레임)
     2.16s  agent 발화 시작: <ret> 죄송하지만, 프랑스 상원 의원 수에 대한 정보는 찾을 수 없었습니다.
     2.26s  user  발화 끝
     2.42s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.84s]: (no information found)
     3.93s  user  발화 시작: 맞아요.
     4.42s  user  발화 끝
     6.00s  agent 발화 끝
     7.32s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 전체 의원 수는요?
     9.77s  <ret> 발화 (turn4 첫 프레임)
    10.00s  agent 발화 시작: <ret> 프랑스 의회는 국민 의회와 상원, 두 개의 의원으로 구성되어 있습니다.
    10.04s  user  발화 끝
    11.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: The French Parliament is made up of two houses: the National Assembly 
    13.26s  user  발화 시작: 맞아요.
    13.76s  user  발화 끝
    15.24s  user  발화 시작: 국민 의회 의원 수는 몇 명이죠?
    15.31s  agent 발화 끝
    17.25s  <ret> 발화 (turn7 첫 프레임)
    17.48s  agent 발화 시작: <ret> 프랑스 국민 의회는 총 오백칠십칠 명의 의원으로 이루어져 있습니다.
    17.50s  user  발화 끝
    18.45s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.80s]: The National Assembly of France has 577 members.
    21.27s  agent 발화 끝
    21.36s  user  발화 시작: 오, 그렇군요. 그럼 상원 의원 수가 더 적은 거네요.
    24.58s  agent 발화 시작: 네, 국민 의회에 비해 상원 의원 수가 적은 편입니다.
    24.59s  user  발화 끝
    25.58s  user  발화 시작: 예.
    26.07s  user  발화 끝
    27.77s  agent 발화 끝
    27.87s  user  발화 시작: 아니요, 괜찮아요. 그런데 요즘 날씨가 어때요?
    30.41s  user  발화 끝
    30.49s  <ret> 발화 (turn12 첫 프레임)
    30.55s  agent 발화 시작: <ret> 현재 서울의 날씨는 기온이 스물셋 점 영도이고, 습도는 칠십사 퍼센트, 바람은 시속 오 점 오킬로
    32.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    37.03s  agent 발화 시작: 날씨가 꽤 덥네요.
    37.04s  agent 발화 끝
    38.23s  agent 발화 끝
    39.18s  user  발화 시작: 네, 정말 더워요. 시원한 음료라도 마셔야겠어요.
    42.27s  user  발화 끝
    42.54s  agent 발화 시작: 그러시군요. 더운 날씨에는 수분 보충이 중요합니다. 건강에 유의하세요.
    46.66s  agent 발화 끝
    46.72s  user  발화 시작: 네, 감사합니다. 좋은 하루 보내세요.
    48.97s  user  발화 끝
    49.15s  agent 발화 시작: 네, 고객님도 좋은 하루 보내세요.
    50.85s  agent 발화 끝
