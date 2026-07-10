# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "보훈",
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
#       "date": "2025-10-17",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 유럽과 아시아를 나누는 전통적인 경계선이 어디예요?
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.61s  agent 발화 시작: <ret> 보통 우랄 산맥을 유럽과 아시아의 경계로 여겨요. 여행 계획 세우실 때 참고하시면 좋겠네요.
     3.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: The Ural Mountains are generally considered the dividing line between 
     3.74s  user  발화 끝
     9.24s  <ret> 발화 (turn2 첫 프레임)
     9.63s  agent 발화 끝
     9.64s  agent 발화 시작: <ret> 혹시 다른 궁금한 점 있으세요? 뭐든 편하게 물어보세요.
     9.64s  ⚡SPAN 주입(IRRELEVANT) [d'=1.44s / d_lead=3.70s]: The current price of Tesla stock is $177.44 as of 3:17 PM EST.
    13.34s  agent 발화 끝
    14.39s  user  발화 시작: 우랄 산맥이 러시아에 있어요?
    16.71s  <ret> 발화 (turn4 첫 프레임)
    16.84s  user  발화 끝
    17.04s  agent 발화 시작: <ret> 네, 우랄 산맥은 러시아 서부에서 시작해서 카자흐스탄까지 이어져요. 꽤 넓은 지역을 차지하고 있죠
    17.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: The Ural Mountains span a north–south arc across western Russia, from 
    19.40s  user  발화 시작: 예.
    19.90s  user  발화 끝
    23.29s  agent 발화 끝
    23.38s  agent 발화 시작: 혹시 러시아 여행 계획 있으신가요? 아니면 그냥 궁금하셨던 건가요?
    27.64s  agent 발화 끝
