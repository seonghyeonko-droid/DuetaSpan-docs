# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "보우",
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
#       "date": "2026-05-10",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-05-02",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "dislike",
#       "text": "User can't stand liver."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "learning",
#       "text": "User is studying for the CPA exam."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-04-06",
#       "title": "Sorting out a visa",
#       "bullets": [
#         "applying for a working-holiday visa to Australia",
#         "asked about the bank-balance requirement"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 네, 덕분에 잘 지냈어요. 래나 씨는요? | S2 사백팔십만 원이요? 생각보다 꽤 되네요. | S3 알겠습니다. 노력해 봐야겠네요. | S4 네, 다행이네요. 물 주는 게 좀 어려워서 걱정했어요.

     0.00s  agent 발화 시작: 안녕하세요, 보우님! 저는 래나예요. 오늘 하루도 잘 보내셨나요?
     4.08s  user  발화 시작: 네, 덕분에 잘 지냈어요. 래나 씨는요?
     4.08s  agent 발화 끝
     7.13s  agent 발화 시작: 저도 괜찮았어요. 혹시 지난번에 말씀하신 호주 워킹홀리데이 비자 준비는 잘 되어 가시나요?
     7.13s  user  발화 끝
    13.25s  user  발화 시작: 아, 네. 그런데 비자 신청할 때 은행 잔고 증명이 필요하다고 하던데… 얼마가 필요한지 기억이 잘 안 나요.
    13.25s  agent 발화 끝
    21.91s  agent 발화 시작: 맞아요.
    21.91s  user  발화 끝
    22.32s  <ret> 발화 (turn5 첫 프레임)
    22.42s  agent 발화 시작: <ret> 지난 대화에서 호주 워킹홀리데이 비자 신청을 위해 은행 잔고 증명이 필요하다고 말씀하셨었죠.
    22.42s  agent 발화 끝
    22.62s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.11s]: [2026-04-06] Past chat — Sorting out a visa: applying for a working-ho
    28.53s  user  발화 시작: 네.
    28.53s  agent 발화 끝
    29.04s  user  발화 시작: 맞아요, 그게 맞는데…
    29.04s  user  발화 끝
    30.57s  agent 발화 시작: 잔고 증명에 필요한 금액은 에이 유 디 오천이에요. 한화로 계산하면 대략 사백팔십만 원 정도 돼요.
    30.57s  user  발화 끝
    38.21s  user  발화 시작: 사백팔십만 원이요? 생각보다 꽤 되네요.
    38.21s  agent 발화 끝
    40.76s  agent 발화 시작: 네, 꽤 큰 금액이죠. 그래도 워킹홀리데이 기간 동안 생활할 수 있는 최소한의 금액이라고 하니 미리 준비하시
    40.76s  user  발화 끝
    50.44s  user  발화 시작: 네네.
    50.44s  agent 발화 끝
    50.95s  agent 발화 시작: 혹시 지금 통장에 얼마 정도 있으신가요? 대략적으로라도 말씀해 주시면 비자 준비에 도움이 될 만한 정보가 있
    50.95s  user  발화 끝
    61.14s  user  발화 시작: 음… 대략 삼백만 원 정도 있어요.
    61.14s  agent 발화 끝
    64.20s  agent 발화 시작: 삼백만 원이 있으시군요. 그럼 조금 더 모으셔야 할 것 같아요. 이백만 원 정도 더 준비하시면 좋을 것 같아
    64.20s  user  발화 끝
    73.37s  user  발화 시작: 알겠습니다. 노력해 봐야겠네요.
    73.37s  agent 발화 끝
    74.90s  agent 발화 시작: 네, 힘내세요!
    74.90s  user  발화 끝
    75.92s  user  발화 시작: 아, 그리고 제가 요즘 집에서 다육식물을 키우고 있는데…
    75.92s  agent 발화 끝
    79.99s  agent 발화 시작: 네네.
    79.99s  user  발화 끝
    80.04s  <ret> 발화 (turn19 첫 프레임)
    80.50s  agent 발화 시작: <ret> 다육식물을 키우신다고 말씀하셨군요. 다육식물은 햇빛을 좋아하고 물을 자주 주지 않아도 되니 키우기
    80.50s  agent 발화 끝
    80.84s  ⚡SPAN 주입 [d'=0.80s / d_lead=7.13s]: [2026-05-10] User is growing a few succulents at home.
    87.63s  user  발화 시작: 네, 다행이네요. 물 주는 게 좀 어려워서 걱정했어요.
    87.63s  agent 발화 끝
    91.71s  agent 발화 시작: 물을 너무 많이 주면 뿌리가 썩을 수 있으니 주의하세요. 흙이 완전히 마른 후에 물을 주는 것이 좋아요.
    91.71s  user  발화 끝
   100.37s  user  발화 시작: 맞아요.
   100.37s  agent 발화 끝
   100.88s  user  발화 시작: 네, 알겠습니다. 래나 씨, 정말 감사합니다.
   100.88s  user  발화 끝
   103.94s  agent 발화 시작: 천만에요, 보우님!
   103.94s  user  발화 끝
   104.96s  agent 발화 끝
