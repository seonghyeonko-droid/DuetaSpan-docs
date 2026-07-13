# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "라정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아카데미 시상식, 그… 멤버들은 누가 뽑아요? | S2 여섯 천 명이나 돼요? 다 영화감독들이에요? | S3 아, 그렇군요. 그럼 배우들도 뽑아요? | S4 혹시 이번 주 금요일 날씨 어때요?

     0.00s  user  발화 시작: 아카데미 시상식, 그… 멤버들은 누가 뽑아요?
     2.88s  <ret> 발화 (turn1 첫 프레임)
     2.96s  agent 발화 시작: <ret> 아카데미 시상식은 영화계 전문가들이 결정하는 걸로 알고 있어요.
     2.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.95s]: The Academy of Motion Picture Arts and Sciences has over 6,000 voting 
     2.96s  user  발화 끝
     6.91s  agent 발화 시작: 아카데미 시상식은 영화계 전문가 여섯 천 명 이상이 투표해서 결정한다고 합니다.
     6.91s  agent 발화 끝
    12.34s  user  발화 시작: 응.
    12.34s  agent 발화 끝
    12.84s  user  발화 시작: 여섯 천 명이나 돼요? 다 영화감독들이에요?
    12.84s  user  발화 끝
    15.64s  <ret> 발화 (turn5 첫 프레임)
    15.80s  agent 발화 시작: <ret> 꼭 그렇지는 않아요. 다양한 분야의 전문가들이 참여하고 있어요.
    15.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.95s]: Membership is divided into seventeen branches representing the various
    15.80s  user  발화 끝
    19.75s  agent 발화 시작: 멤버십은 영화 제작의 다양한 분야를 대표하는 열일곱 개 지부로 나뉘는데, 배우, 촬영감독, 감독, 편집자, 
    19.75s  agent 발화 끝
    28.15s  user  발화 시작: 응.
    28.15s  agent 발화 끝
    28.64s  user  발화 시작: 아, 그렇군요. 그럼 배우들도 뽑아요?
    28.64s  user  발화 끝
    30.95s  <ret> 발화 (turn9 첫 프레임)
    31.11s  agent 발화 시작: <ret> 네, 배우 지부에서 배우들이 직접 투표에 참여합니다.
    31.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.46s]: Actors constitute the largest of the seventeen branches, with over one
    31.11s  user  발화 끝
    34.57s  agent 발화 시작: 배우들은 열일곱 지부 중 가장 큰 규모로, 천 명 이상이 넘는 멤버들이 후보와 수상자를 선정하는 데 중요한 
    34.57s  agent 발화 끝
    43.95s  user  발화 시작: 혹시 이번 주 금요일 날씨 어때요?
    43.95s  agent 발화 끝
    46.51s  <ret> 발화 (turn12 첫 프레임)
    46.91s  agent 발화 시작: <ret> 이번 주 금요일 서울 날씨는 기온이 이십삼도이고, 습도는 칠십사퍼센트, 바람은 시속 오 점 오킬로
    46.91s  ⚡SPAN 주입 [d'=1.44s / d_lead=6.91s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    46.91s  user  발화 끝
    53.82s  agent 발화 시작: 주말 계획은 세우셨나요?
    53.82s  agent 발화 끝
    55.30s  agent 발화 끝
