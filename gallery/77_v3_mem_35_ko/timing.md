# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "태아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-05-31",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 태아님. 저는 프라리스예요. 편안한 휴식을 도와드리는 에이전트랍니다.
     5.79s  user  발화 시작: 어… 안녕하세요. 혹시 맛집 추천 좀 해줄 수 있어요?
     6.16s  agent 발화 끝
     9.69s  <ret> 발화 (turn2 첫 프레임)
     9.84s  agent 발화 시작: <ret> 태아님. 스시를 가장 좋아하시는 걸로 알고 있어요.
     9.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: User's favorite cuisine is sushi.
    10.10s  user  발화 끝
    12.62s  user  발화 시작: 맞아.
    13.25s  user  발화 끝
    13.28s  user  발화 시작: 네, 맞아요. 스시 진짜 좋아해요.
    13.68s  agent 발화 끝
    16.42s  user  발화 끝
    16.50s  <ret> 발화 (turn5 첫 프레임)
    16.57s  agent 발화 시작: <ret> 알레르기 있으신 건 없으신가요?
    16.58s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.35s]: User is allergic to peanuts.
    18.68s  agent 발화 시작: 혹시 땅콩 알레르기가 있으시다고 하셨죠? 땅콩을 사용하지 않는 곳으로 찾아드릴게요.
    18.91s  agent 발화 끝
    25.07s  agent 발화 끝
    25.10s  user  발화 시작: …아, 맞다! 혹시 혼자 가기 좋은 곳으로 알아봐 줄 수 있어?
    29.02s  <ret> 발화 (turn8 첫 프레임)
    29.17s  agent 발화 시작: <ret> 스신이라는 곳은 어떠세요? 부산에 있고, 가격대는 이만 원에서 오만 원 사이, 평점은 오점 만점에
    29.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.78s]: Restaurant: Sushin, Address: 123-45, Busan, South Korea, Price range: 
    29.35s  user  발화 끝
    40.95s  agent 발화 끝
