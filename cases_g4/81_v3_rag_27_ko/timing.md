# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "라국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-26",
#       "category": "trip",
#       "text": "User is planning a trip to Taiwan in March."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "bloodtype",
#       "text": "User's blood type is AB+."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "car",
#       "text": "User drives a 2015 Toyota Corolla."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "partner",
#       "text": "User's partner is named Yuna."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Lebanese."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "employer",
#       "text": "User works at an airline."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "work",
#       "text": "User works as a paramedic."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "diet",
#       "text": "User is keto."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "show",
#       "text": "User is currently watching a nature documentary series."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-22",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-05-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 크루낸 님. 요즘 마음 정리를 하다가 문득 궁금한 게 생겼어요.
     4.61s  agent 발화 시작: [happy] 안녕하세요. 어떤 게 궁금하신가요? 편하게 말씀해 주세요.
     4.82s  user  발화 끝
     8.54s  agent 발화 끝
     8.57s  user  발화 시작: 조던 민츠가 내부 고발한 내용이 언제 세상에 알려졌는지 기억나세요?
    13.02s  <ret> 발화 (turn3 첫 프레임)
    13.20s  agent 발화 시작: <ret> 그 사건에 대해 말씀드리자면, 공개된 시점은... 이천일년 시월이었습니다.
    13.29s  user  발화 끝
    14.82s  ⚡SPAN 주입 [d'=1.80s / d_lead=3.54s]: Jordan Mintz's whistleblowing was publicized in October 2001.
    17.61s  user  발화 시작: 아, 그렇군요. 알려주셔서 감사해요.
    17.92s  agent 발화 끝
    21.22s  user  발화 끝
