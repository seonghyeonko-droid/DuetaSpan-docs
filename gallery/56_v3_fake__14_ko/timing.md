# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "유정",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 디시 네트워크에서 nbcsn 채널 번호가 어떻게 되나요? | S2 오십 삼십 이십 예산법이요? 처음 듣는 것 같아요. | S3 생활비가 얼마나 될까요? | S4 대중교통은 괜찮은데, 식비를 줄이는 건 힘들 것 같아요.

     0.00s  user  발화 시작: 혹시 디시 네트워크에서 nbcsn 채널 번호가 어떻게 되나요?
     4.00s  agent 발화 시작: 맞아요.
     4.00s  user  발화 끝
     4.44s  <ret> 발화 (turn2 첫 프레임)
     4.50s  agent 발화 시작: <ret> 디시 네트워크에서 nbcsn 채널 번호는 백오십구번입니다. 혹시 다른 채널 번호도 궁금하신가요?
     4.50s  agent 발화 끝
     5.51s  ⚡SPAN 주입 [d'=1.08s / d_lead=5.50s]: 159.
    10.00s  user  발화 시작: 아, 네, 감사합니다.
    10.00s  agent 발화 끝
    11.50s  agent 발화 시작: 천만에요.
    11.50s  user  발화 끝
    12.00s  user  발화 시작: 요즘 돈 관리가 너무 힘들어요.
    12.00s  agent 발화 끝
    14.50s  agent 발화 시작: [happy] 돈 관리가 어렵다고 느끼시는군요. 드로라크스입니다. 제가 도와드릴 수 있을 것 같아요.
    14.50s  user  발화 끝
    20.51s  user  발화 시작: 아.
    20.51s  agent 발화 끝
    21.01s  user  발화 시작: 어떻게 하면 좋을까요?
    21.01s  user  발화 끝
    22.51s  agent 발화 시작: 우선 예산을 세우는 것부터 시작해 보는 건 어떠세요? 오십 삼십 이십 예산법을 아시나요?
    22.51s  user  발화 끝
    29.01s  user  발화 시작: 음.
    29.01s  agent 발화 끝
    29.51s  user  발화 시작: 오십 삼십 이십 예산법이요? 처음 듣는 것 같아요.
    29.51s  user  발화 끝
    33.44s  <ret> 발화 (turn12 첫 프레임)
    33.51s  agent 발화 시작: <ret> 오십 삼십 이십 예산법은 수입의 오십퍼센트를 필수 지출에, 삼십퍼센트를 원하는 것에, 그리고 이십
    33.51s  user  발화 끝
    34.67s  ⚡SPAN 주입 [d'=1.24s / d_lead=10.00s]: The 50/30/20 rule is a simple budgeting method where 50% of your incom
    43.51s  user  발화 시작: 예.
    43.51s  agent 발화 끝
    44.01s  user  발화 시작: 아, 그렇군요.
    44.01s  user  발화 끝
    45.01s  agent 발화 시작: 네, 간단하죠? 필수 지출은 집세나 식비처럼 꼭 필요한 것들이고, 원하는 것은 취미나 외식 같은 것들입니다.
    45.01s  user  발화 끝
    52.51s  user  발화 시작: 맞아요.
    52.51s  agent 발화 끝
    53.01s  user  발화 시작: 그럼 저축은 뭘까요?
    53.01s  user  발화 끝
    54.51s  agent 발화 시작: 저축은 미래를 위한 준비입니다. 비상 자금이나 투자 등을 포함하죠.
    54.51s  user  발화 끝
    59.01s  user  발화 시작: 맞아요.
    59.01s  agent 발화 끝
    59.51s  user  발화 시작: 비상 자금이 왜 중요해요?
    59.51s  user  발화 끝
    60.94s  <ret> 발화 (turn21 첫 프레임)
    61.52s  agent 발화 시작: <ret> 비상 자금은 예상치 못한 의료비나 실직과 같은 상황에 대비하여 재정적 안정을 제공하고 빚을 막아주
    61.52s  user  발화 끝
    62.27s  ⚡SPAN 주입 [d'=1.33s / d_lead=8.50s]: An emergency fund is crucial for unexpected expenses like medical bill
    70.02s  user  발화 시작: 예.
    70.02s  agent 발화 끝
    70.52s  agent 발화 시작: [curious] 비상 자금이 없으면 갑작스러운 상황에 당황할 수 있어요. 최소 세개월에서 여섯개월치 생활비
    70.52s  user  발화 끝
    78.52s  user  발화 시작: 네.
    78.52s  agent 발화 끝
    79.02s  user  발화 시작: 생활비가 얼마나 될까요?
    79.02s  user  발화 끝
    80.52s  agent 발화 시작: 생활비는 개인의 상황에 따라 다르지만, 월 고정 지출을 기준으로 계산해 볼 수 있습니다.
    80.52s  user  발화 끝
    87.02s  user  발화 시작: 지금 월세가 팔십만 원이고, 식비가 사십만 원이에요.
    87.02s  agent 발화 끝
    90.52s  agent 발화 시작: 팔십만 원의 월세와 사십만 원의 식비군요. 다른 고정 지출은 어떤 것들이 있나요?
    90.52s  user  발화 끝
    96.52s  user  발화 시작: 교통비가 이십만 원 정도 들고, 통신비가 십만 원이에요.
    96.52s  agent 발화 끝
   100.53s  agent 발화 시작: 교통비 이십만 원, 통신비 십만 원이군요. 그럼 한 달 고정 지출은 총 백오십만 원이네요.
   100.53s  user  발화 끝
   107.53s  user  발화 시작: 네.
   107.53s  agent 발화 끝
   108.03s  user  발화 시작: 맞아요.
   108.03s  user  발화 끝
   108.27s  <ret> 발화 (turn33 첫 프레임)
   108.53s  agent 발화 시작: <ret> 예를 들어, 대중교통을 이용하거나 식비를 절약하는 것이죠.
   108.53s  user  발화 끝
   109.13s  ⚡SPAN 주입(IRRELEVANT) [d'=0.85s / d_lead=3.50s]: The average temperature in Anchorage, Alaska is 36.5°F with a humidity
   112.03s  user  발화 시작: 네.
   112.03s  agent 발화 끝
   112.53s  user  발화 시작: 대중교통은 괜찮은데, 식비를 줄이는 건 힘들 것 같아요.
   112.53s  user  발화 끝
   116.53s  agent 발화 시작: 식비를 줄이는 것이 어렵다면, 다른 부분에서 절약할 수 있는 방법을 찾아봐야 합니다.
   116.53s  user  발화 끝
   122.53s  user  발화 시작: 예.
   122.53s  agent 발화 끝
   123.03s  user  발화 시작: 어디서 절약할 수 있을까요?
   123.03s  user  발화 끝
   125.03s  agent 발화 시작: 불필요한 구독 서비스를 해지하거나, 취미 생활에 쓰는 돈을 줄이는 것도 좋은 방법입니다.
   125.03s  user  발화 끝
   131.03s  user  발화 시작: 맞아요.
   131.03s  agent 발화 끝
   131.53s  user  발화 시작: 구독 서비스는 이미 다 해지했어요.
   131.53s  user  발화 끝
   134.03s  agent 발화 시작: 이미 구독 서비스를 해지하셨군요. 그럼 취미 생활에 쓰는 돈을 조금 줄여보는 건 어떠세요?
   134.03s  user  발화 끝
   140.54s  user  발화 시작: 음… 그건 좀 생각해 봐야겠어요.
   140.54s  agent 발화 끝
   143.04s  agent 발화 시작: [happy] 천천히 생각해보세요. 중요한 것은 자신에게 맞는 예산 계획을 세우는 것입니다.
   143.04s  user  발화 끝
   148.54s  agent 발화 끝
