# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "채훈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-10-19",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 피겨 스케이팅에서 최고 점수가 얼마였죠? | S2 아니요, 그건 됐어요. 이번 주 토요일에… | S3 …아이들하고 갈 만한 곳 좀 추천해 주시겠어요? | S4 오, 좋아요! 고맙습니다.

     0.00s  user  발화 시작: 음… 피겨 스케이팅에서 최고 점수가 얼마였죠?
     2.80s  <ret> 발화 (turn1 첫 프레임)
     3.12s  agent 발화 시작: <ret> 피겨 스케이팅 최고 점수는 삼백삼십 점 사 삼점이고, 네이선 첸 선수가 이천이십이년 동계 올림픽에
     3.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.80s]: The highest score in ice skating is 330.43, achieved by Nathan Chen at
     3.12s  user  발화 끝
    10.92s  user  발화 시작: 음.
    10.92s  agent 발화 끝
    11.44s  user  발화 시작: 어… 네.
    11.44s  user  발화 끝
    12.48s  agent 발화 시작: 혹시 다른 스케이팅 종목에 대해서도 궁금하신 점이 있으신가요?
    12.48s  user  발화 끝
    16.64s  user  발화 시작: 아니요, 그건 됐어요. 이번 주 토요일에…
    16.64s  agent 발화 끝
    19.77s  user  발화 시작: …아이들하고 갈 만한 곳 좀 추천해 주시겠어요?
    19.77s  user  발화 끝
    23.25s  <ret> 발화 (turn7 첫 프레임)
    23.41s  agent 발화 시작: <ret> 이번 주 토요일에는 여의도 한강공원에서 한강 불꽃 축제가 열린다고 합니다. 아이들과 함께 가보시면
    23.41s  ⚡SPAN 주입 [d'=1.84s / d_lead=8.32s]: (tool result) {"events": [{"name": "한강 불꽃 축제", "date": "2026-07-11", "
    23.41s  user  발화 끝
    31.73s  user  발화 시작: 오, 좋아요! 고맙습니다.
    31.73s  agent 발화 끝
    33.29s  agent 발화 시작: 아이들과 함께 즐거운 시간 보내시길 바랍니다.
    33.29s  user  발화 끝
    36.41s  agent 발화 끝
