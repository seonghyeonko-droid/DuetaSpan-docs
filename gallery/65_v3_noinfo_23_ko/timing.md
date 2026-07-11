# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "채영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2025-06-14",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 김민지 씨 전화번호 알아?
     1.64s  <ret> 발화 (turn1 첫 프레임)
     2.03s  agent 발화 시작: <ret> 죄송해요, 김민지 씨 연락처는 찾을 수 없었어요. 개인 정보라서 그런 것 같아요.
     2.03s  user  발화 끝
     2.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: (no information found)
     6.94s  agent 발화 끝
     7.59s  user  발화 시작: 아, 그렇군요. 그럼 오늘 날씨는 어때요?
     9.54s  <ret> 발화 (turn3 첫 프레임)
     9.78s  agent 발화 시작: <ret> 지금 현재 위치의 날씨는 기온 이십삼도, 습도 칠십사퍼센트, 바람은 시속 오 점 오킬로미터로 불고
     9.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.11s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
     9.95s  user  발화 끝
    15.36s  user  발화 시작: 어머.
    15.85s  user  발화 끝
    19.88s  agent 발화 끝
    20.43s  user  발화 시작: 이번 주 토요일에 영화 보러 갈까요?
    22.14s  agent 발화 시작: 이번 주 토요일에 영화를 보시는 건 정말 좋은 생각이에요. 혹시 보고 싶은 영화가 있으세요?
    22.36s  user  발화 끝
    28.48s  agent 발화 끝
