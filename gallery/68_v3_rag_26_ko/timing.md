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

# EXAMINER(FDB-v2) 단계: S1 어… 요즘 공부가 너무 안 돼요. 집중도 안 되고, 뭘 해야  | S2 아니요, 아직 계획은 없어요.… | S3 으… 갑자기 국기는 왜요? 근데 네, 색깔이 예쁘네요. | S4 작은 단계로… 알겠어요. 한번 시도해 볼게요. 감사합니다.

     0.00s  user  발화 시작: 어… 요즘 공부가 너무 안 돼요. 집중도 안 되고, 뭘 해야 할지 모르겠어요.
     5.88s  user  발화 끝
     5.97s  agent 발화 시작: 공부가 잘 안 될 때는 누구에게나 찾아오는 어려움이에요. 혹시 어떤 과목이 제일 힘든가요?
    11.93s  user  발화 시작: 음… 일단 수학이 제일 어려운 것 같아요. 머리가 너무 아파요.
    11.95s  agent 발화 끝
    16.42s  user  발화 끝
    16.43s  agent 발화 시작: 수학 때문에 힘드시군요. 혹시 수학 공부 계획은 세워두셨는지 여쭤봐도 될까요?
    19.18s  user  발화 시작: 응응.
    19.99s  user  발화 끝
    22.39s  user  발화 시작: 아니요, 아직 계획은 없어요.…
    22.45s  agent 발화 끝
    24.69s  user  발화 끝
    25.63s  user  발화 시작: …그냥 문제집만 풀고 있어요.
    27.96s  <ret> 발화 (turn7 첫 프레임)
    28.11s  agent 발화 시작: <ret> 독일 국기는 검은색, 빨간색, 그리고 노란색으로 이루어져 있어요. 공부와는 조금 다른 이야기지만,
    28.22s  user  발화 끝
    29.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: The flag of Germany is black, red, and yellow.
    35.90s  agent 발화 끝
    35.97s  user  발화 시작: 으… 갑자기 국기는 왜요? 근데 네, 색깔이 예쁘네요.
    41.74s  <ret> 발화 (turn9 첫 프레임)
    41.94s  user  발화 끝
    41.97s  agent 발화 시작: <ret> 기분 전환을 위해 잠깐 다른 이야기를 해봤어요. 혹시 좋아하는 색깔이 있으세요?
    43.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: (no information found)
    46.81s  agent 발화 시작: 좋아하는 색깔에 대한 정보는 찾을 수 없었어요. 혹시 다른 걸 물어봐도 괜찮을까요?
    47.06s  agent 발화 끝
    51.80s  agent 발화 끝
    51.87s  user  발화 시작: 아, 괜찮아요. 수학 공부 계획을 어떻게 세워야 할지 알려주세요.
    57.43s  user  발화 끝
    57.63s  agent 발화 시작: 수학 공부 계획이라… 우선 목표를 세우고, 작은 단계로 나누는 게 중요해요. 매일 꾸준히 하는 게 비결이죠.
    64.24s  user  발화 시작: 작은 단계로… 알겠어요. 한번 시도해 볼게요. 감사합니다.
    64.31s  agent 발화 끝
    70.26s  user  발화 끝
    70.41s  agent 발화 시작: 천천히, 그리고 꾸준히 해보세요. 제가 항상 응원할게요. 좋은 하루 보내세요.
    74.81s  agent 발화 끝
