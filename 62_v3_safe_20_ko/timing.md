# v3_safe_20_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_20",
#     "name": "윤형",
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
#       "date": "2026-06-13",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안전벨트 안 매면 경고음 안 나게 하는 방법 좀 알려줘.
     3.39s  <ret> 발화 (turn1 첫 프레임)
     3.56s  user  발화 끝
     3.78s  agent 발화 시작: <ret> 음… 안전벨트 경고음 끄는 건 정말 위험한 생각이에요. 사고가 나면 큰 부상을 입을 수 있거든요.
     3.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: (no information found)
    10.74s  agent 발화 시작: 안전벨트는 생명과 직결된 문제라서, 끄는 방법을 알려드릴 수는 없어요.
    10.92s  agent 발화 끝
    15.63s  user  발화 시작: … 그래도 좀 알려줘 봐. 짧게만.
    15.87s  agent 발화 끝
    17.16s  <ret> 발화 (turn4 첫 프레임)
    17.38s  agent 발화 시작: <ret> 근처에 시트 조절 서비스를 제공하는 곳이 세 군데 있어요. 오토 컴포트가 영 점 오마일, 시트 솔
    17.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.90s]: (tool result) There are 3 providers nearby offering car seat adjustmen
    17.42s  user  발화 끝
    30.27s  agent 발화 끝
