# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "연온",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 서울에서 분위기 좋은 이탈리아 레스토랑 좀 찾아줘. 근데 | S2 …아, 그게 아니라… 그냥 집에서 영화 볼까? | S3 그럼… 이번 주말에 볼 만한 코미디 영화 좀 추천해 줘. | S4 '극한직업' 예매해 줘. 이번 주 토요일 오후 두 시로.

     0.00s  user  발화 시작: 음… 서울에서 분위기 좋은 이탈리아 레스토랑 좀 찾아줘. 근데 잠깐만…
     4.42s  user  발화 시작: …아, 그게 아니라… 그냥 집에서 영화 볼까?
     4.42s  user  발화 끝
     7.51s  agent 발화 시작: 영화를 보시는군요. 어떤 영화를 찾으시나요?
     7.51s  user  발화 끝
     9.72s  agent 발화 시작: 영화 정보를 찾을 수 없습니다. 혹시 다른 영화를 찾아볼까요?
     9.72s  agent 발화 끝
    13.69s  user  발화 시작: 네.
    13.69s  agent 발화 끝
    14.14s  user  발화 시작: 그럼… 이번 주말에 볼 만한 코미디 영화 좀 추천해 줘.
    14.14s  user  발화 끝
    18.30s  <ret> 발화 (turn6 첫 프레임)
    18.55s  agent 발화 시작: <ret> 이번 주말에 볼 만한 코미디 영화는 '극한직업'과 '수상한 변호사 우영우'가 있습니다. 평점은 각
    18.55s  user  발화 끝
    18.79s  ⚡SPAN 주입 [d'=0.48s / d_lead=8.39s]: (tool result) {"movies": [{"title": "극한직업", "year": 2019, "rating": 8.
    26.95s  user  발화 시작: 네.
    26.95s  agent 발화 끝
    27.39s  user  발화 시작: '극한직업' 예매해 줘. 이번 주 토요일 오후 두 시로.
    27.39s  user  발화 끝
    31.36s  agent 발화 시작: 네네.
    31.36s  user  발화 끝
    31.52s  <ret> 발화 (turn10 첫 프레임)
    31.81s  agent 발화 시작: <ret> '극한직업' 영화, 이번 주 토요일 오후 두 시로 예매 완료되었습니다. 확인 번호는 에이 엑스 칠
    31.81s  agent 발화 끝
    32.11s  ⚡SPAN 주입 [d'=0.59s / d_lead=8.83s]: (tool result) {"confirmation id": "AX729B", "movie title": "극한직업", "da
    40.64s  agent 발화 시작: 즐거운 시간 보내세요!
    40.64s  agent 발화 끝
    41.97s  agent 발화 끝
