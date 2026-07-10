# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "도원",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 요즘 공부가 너무 안 돼요. 집중이 안 되고… 그냥 막막 | S2 아, 맞다. 맞아요! 독일 여행 갔을 때 엄청 많이 봤지. 근 | S3 오, 그렇군요. 색깔 조합이 예쁘네요. 근데 공부 얘기로 다시 | S4 스터디 그룹… 좋은 생각인데, 어디서 찾아야 할지 모르겠어요.

     0.00s  user  발화 시작: 아, 요즘 공부가 너무 안 돼요. 집중이 안 되고… 그냥 막막해요.
     5.05s  user  발화 끝
     5.11s  agent 발화 시작: 공부에 어려움을 느끼시는군요. 어떤 과목이 특히 힘든가요? 혹시 구체적으로 말씀해 주시면 제가 좀 더 도움을
    12.67s  user  발화 시작: 독일 국기 색깔이 뭐였더라… 까만색, 빨간색, 그리고… 노란색 맞나?
    12.67s  agent 발화 끝
    18.99s  <ret> 발화 (turn3 첫 프레임)
    19.30s  agent 발화 시작: <ret> 독일 국기는 검은색, 빨간색, 그리고 노란색으로 이루어져 있어요.
    19.43s  user  발화 끝
    20.43s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.21s]: The flag of Germany is black, red, and yellow.
    21.17s  user  발화 시작: 응응.
    21.99s  user  발화 끝
    23.46s  user  발화 시작: 아, 맞다. 맞아요! 독일 여행 갔을 때 엄청 많이 봤지. 근데 그때 베를린 날씨가 너무 추웠어.
    23.51s  agent 발화 끝
    31.43s  agent 발화 시작: 베를린은 겨울에 꽤 추운 편이에요. 혹시 다른 나라 국기 색깔에 대해서도 궁금하신 점이 있으신가요?
    31.57s  user  발화 끝
    37.54s  agent 발화 끝
    38.04s  user  발화 시작: 음… 이탈리아 국기는 무슨 색이지?
    40.80s  <ret> 발화 (turn8 첫 프레임)
    41.03s  agent 발화 시작: <ret> 이탈리아 국기는 초록색, 흰색, 그리고 빨간색으로 되어 있어요.
    41.26s  user  발화 끝
    42.48s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.84s]: The flag of Italy is green, white, and red.
    44.66s  user  발화 시작: 오, 그렇군요. 색깔 조합이 예쁘네요. 근데 공부 얘기로 다시 돌아가자면…
    44.87s  agent 발화 끝
    51.94s  user  발화 끝
    51.96s  agent 발화 시작: 네, 공부 때문에 걱정이 많으신 것 같네요. 어떤 공부 방법을 시도해 보셨나요?
    56.73s  agent 발화 끝
    57.55s  user  발화 시작: 그냥 책만 보고, 문제만 풀고… 근데 잘 안 돼요. 뭔가 다른 방법이 필요할 것 같아요.
    65.17s  agent 발화 시작: 책만 보는 것보다 다양한 방법을 시도해 보는 게 도움이 될 수 있어요. 예를 들어, 친구들과 함께 공부하거나
    65.19s  user  발화 끝
    69.26s  user  발화 시작: 음.
    69.75s  user  발화 끝
    73.93s  user  발화 시작: 스터디 그룹… 좋은 생각인데, 어디서 찾아야 할지 모르겠어요.
    73.93s  agent 발화 끝
    79.16s  agent 발화 시작: 스터디 그룹을 찾는 데 도움을 드릴 수 있어요. 혹시 다니시는 학교나 학원에 스터디 그룹이 있는지 알아보시는
    79.30s  user  발화 끝
    86.62s  agent 발화 끝
