# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "다별",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-04-12",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 창사에서 닝보까지 차로 가면 얼마나 걸릴까? | S2 서울은 너무 오래 걸리네. 좀 더 가까운 데는 어디가 있을까? | S3 아, 큰애는 일곱 살이고, 작은애는 네 살이에요. | S4 거기는 입장료가 얼마야?

     0.00s  user  발화 시작: 창사에서 닝보까지 차로 가면 얼마나 걸릴까?
     3.28s  <ret> 발화 (turn1 첫 프레임)
     3.57s  agent 발화 시작: <ret> 창사에서 닝보까지 차로 가려면 대략 칠백팔십삼킬로미터 정도이고, 교통 상황에 따라 아홉시간 삼십분
     3.57s  user  발화 끝
     4.57s  ⚡SPAN 주입 [d'=1.30s / d_lead=8.94s]: The driving distance between Changsha and Ningbo is approximately 783 
    12.51s  user  발화 시작: 음… 부산까지는?
    12.51s  agent 발화 끝
    13.12s  <ret> 발화 (turn3 첫 프레임)
    13.70s  agent 발화 시작: <ret> 창사에서 부산까지는 대략 천백팔십킬로미터이고, 교통 상황에 따라 열세시간 삼십분 정도 예상돼요. 
    13.70s  user  발화 끝
    14.09s  ⚡SPAN 주입 [d'=0.97s / d_lead=7.74s]: The driving distance between Changsha and Busan is approximately 1,180
    21.45s  user  발화 시작: 어휴, 너무 멀다. 그럼 서울은?
    21.45s  agent 발화 끝
    24.26s  <ret> 발화 (turn5 첫 프레임)
    24.42s  agent 발화 시작: <ret> 창사에서 서울까지는 약 천사백사십킬로미터이고, 교통에 따라 열여섯시간 삼십분 정도 걸릴 거예요. 
    24.42s  user  발화 끝
    25.12s  ⚡SPAN 주입 [d'=0.86s / d_lead=7.74s]: The driving distance between Changsha and Seoul is approximately 1,440
    32.17s  user  발화 시작: 서울은 너무 오래 걸리네. 좀 더 가까운 데는 어디가 있을까?
    32.17s  agent 발화 끝
    38.13s  agent 발화 시작: 서울보다는 가까운 곳을 찾으시는군요. 혹시 특별히 가고 싶은 도시가 있으세요?
    38.13s  user  발화 끝
    44.08s  user  발화 시작: 아니, 그냥… 아이들 데리고 당일치기 갈 만한 곳.
    44.08s  agent 발화 끝
    48.85s  agent 발화 시작: 아이들과 당일치기로 가기 좋은 곳을 찾으시는군요. 아이들 연령대는 어떻게 되세요?
    48.85s  user  발화 끝
    54.81s  user  발화 시작: 아, 큰애는 일곱 살이고, 작은애는 네 살이에요.
    54.81s  agent 발화 끝
    58.36s  <ret> 발화 (turn11 첫 프레임)
    58.66s  ⚡SPAN 주입 [d'=0.30s / d_lead=10.72s]: (tool result) {"results": [{"name": "Changsha Happy World", "address":
    58.98s  agent 발화 시작: <ret> 창샤 근처에 창샤 해피월드라는 테마파크가 있어요. 카이푸구 잉빈로 이백번지에 있고, 평점은 사 점
    58.98s  user  발화 끝
    69.70s  user  발화 시작: 오, 테마파크 좋겠다! 거기는 뭐 탈 수 있는 게 많아?
    69.70s  agent 발화 끝
    75.66s  agent 발화 시작: 창샤 해피월드는 다양한 놀이기구와 볼거리가 있는 테마파크예요. [curious] 아이들이 좋아할 만한 것들이
    75.66s  user  발화 끝
    84.59s  user  발화 시작: 거기는 입장료가 얼마야?
    84.59s  agent 발화 끝
    86.37s  <ret> 발화 (turn15 첫 프레임)
    86.38s  agent 발화 시작: <ret> 창샤 해피월드 입장료는 계절과 티켓 종류에 따라 백팔십위안에서 이백팔십위안 정도예요.
    86.38s  user  발화 끝
    87.47s  ⚡SPAN 주입 [d'=1.10s / d_lead=5.96s]: (tool result) Changsha Happy World ticket prices range from 180 to 280
    92.33s  user  발화 시작: 음, 얼마인지 알려줘서 고마워.
    92.33s  agent 발화 끝
    94.72s  agent 발화 시작: 천만에요. 아이들과 즐거운 시간 보내시길 바랍니다.
    94.72s  user  발화 끝
    98.29s  agent 발화 끝
