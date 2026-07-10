# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "진완",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-15",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 캐나다 총리가 어디에 사는지 궁금해요. | S2 음, 그 집은 얼마나 큰가요? | S3 와, 엄청 크네요. 혹시 그 집이— | S4 …그 집이 일반인에게 공개되나요?

     0.00s  user  발화 시작: 캐나다 총리가 어디에 사는지 궁금해요.
     2.02s  <ret> 발화 (turn1 첫 프레임)
     2.33s  agent 발화 시작: <ret> 캐나다 총리님께서 거주하시는 곳은… 이십사 서식스 드라이브입니다. 정말 멋진 곳이죠.
     2.34s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.69s]: 24 Sussex Drive is the official residence of the Prime Minister of Can
     2.45s  user  발화 끝
     4.76s  user  발화 시작: 음.
     5.26s  user  발화 끝
     8.02s  agent 발화 끝
     9.17s  user  발화 시작: 음, 그 집은 얼마나 큰가요?
    11.23s  <ret> 발화 (turn4 첫 프레임)
    11.25s  user  발화 끝
    11.39s  agent 발화 시작: <ret> 그곳은 삼십이에이커의 숲 속에 자리 잡은, 방이 서른네개나 되는 아주 넓은 집이랍니다.
    11.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: The 34-room residence sits on a 32-acre wooded estate.
    14.07s  user  발화 시작: 음.
    14.47s  user  발화 끝
    16.90s  agent 발화 끝
    16.95s  user  발화 시작: 와, 엄청 크네요. 혹시 그 집이—
    20.16s  user  발화 시작: …그 집이 일반인에게 공개되나요?
    20.32s  user  발화 끝
    22.25s  <ret> 발화 (turn8 첫 프레임)
    22.56s  agent 발화 시작: <ret> 아, 네, 좋은 질문이에요. — 이천팔년부터 일반인에게는 공개가 중단되었답니다. 아쉽지만요.
    22.73s  user  발화 끝
    22.97s  ⚡SPAN 주입 [d'=0.72s / d_lead=2.73s]: Public tours of 24 Sussex Drive have been suspended since 2008.
    28.03s  agent 발화 끝
