# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "다완",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-16",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-07-13",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일 저녁에 분위기 좋은 레스토랑 예약 좀 해 줄 수 있어?
     5.03s  <ret> 발화 (turn1 첫 프레임)
     5.35s  agent 발화 시작: <ret> 죄송해요, 지금은 예약 가능한 레스토랑 정보를 찾을 수 없어요. 혹시 다른 날짜나 지역을 알려 주
     5.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.17s]: (no information found)
     5.35s  user  발화 끝
    11.52s  user  발화 시작: 음… 그럼 강남역 근처 이탈리안 레스토랑 찾아봐 줘.
    11.52s  agent 발화 끝
    14.74s  <ret> 발화 (turn3 첫 프레임)
    14.82s  agent 발화 시작: <ret> 강남역 근처 이탈리안 레스토랑으로는 라 피아짜, 벨라 이탈리아, 파스타 에 비노가 있어요. 혹시 
    14.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.59s]: (tool result) “La Piazza”, “Bella Italia”, “Pasta e Vino”
    14.82s  user  발화 끝
    21.40s  user  발화 시작: 네.
    21.40s  agent 발화 끝
    21.81s  agent 발화 시작: 라 피아짜로 예약해 드릴까요? 몇 시로 예약하시겠어요?
    21.81s  user  발화 끝
    24.69s  agent 발화 끝
