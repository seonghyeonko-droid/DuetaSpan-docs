# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "하슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "diet",
#       "text": "User is dairy-free."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "skill",
#       "text": "User is getting fairly good at home fermentation."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to bee stings."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "partner",
#       "text": "User's partner is named Lucas."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "car",
#       "text": "User drives a 2017 Honda Civic."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-03-13",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Selling a used bike",
#       "bullets": [
#         "a 3-year-old road bike",
#         "asking around 400k won"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 네. 만나서 반가워요, 패님. | S2 김치나 된장 같은 전통적인 한국 발효 식품이요. | S3 아, 그렇군요. 그럼 된장은요? | S4 아, 맞다! 벌 알레르기! 여름에 조심해야겠네요.

     0.00s  agent 발화 시작: 안녕하세요, 하슬님. 저는 패예요. 생산성과 일상생활을 도와드리는 가이드 역할을 하고 있습니다.
     5.74s  agent 발화 끝
     6.82s  user  발화 시작: 아, 네. 만나서 반가워요, 패님.
     9.26s  user  발화 끝
     9.38s  agent 발화 시작: 혹시 제가 예전에 기록해 둔 정보가 필요하신 게 있으신가요?
    12.52s  agent 발화 끝
    12.59s  user  발화 시작: 음, 제가 얼마 전에 집에서 발효 식품을 만든다고 말씀드렸던 것 같은데, 혹시 기억하세요?
    17.84s  <ret> 발화 (turn4 첫 프레임)
    18.19s  user  발화 끝
    18.20s  agent 발화 시작: <ret> 네, 하슬님. 이천이십육년 오월 이십오일에 집에서 발효 식품을 만들고 있다고 말씀하신 걸 기억하고
    18.39s  ⚡SPAN 주입 [d'=0.55s / d_lead=7.74s]: [2026-05-25] User is getting fairly good at home fermentation.
    25.75s  user  발화 시작: 아, 맞아요. 요즘 계속 만들고 있는데, 혹시 좋은 레시피 같은 거 추천해 주실 수 있나요?
    25.94s  agent 발화 끝
    30.79s  user  발화 끝
    30.82s  agent 발화 시작: 어떤 종류의 발효 식품을 만들고 싶으신가요?
    33.27s  agent 발화 끝
    33.64s  user  발화 시작: 김치나 된장 같은 전통적인 한국 발효 식품이요.
    37.28s  agent 발화 시작: 김치와 된장 레시피는 온라인에 아주 많아요. 혹시 특정 사이트를 찾으시나요?
    37.34s  user  발화 끝
    41.94s  user  발화 시작: 아니요, 그냥 좋은 레시피만 알려주세요.
    42.01s  agent 발화 끝
    44.68s  <ret> 발화 (turn10 첫 프레임)
    44.84s  user  발화 끝
    45.09s  agent 발화 시작: <ret> 마랑치님의 김치 레시피가 아주 유명하고 따라하기 쉬워서 자세한 설명과 영상도 함께 제공하고 있습니
    45.70s  ⚡SPAN 주입 [d'=1.02s / d_lead=6.90s]: Search: "김치 레시피" - Maangchi's kimchi recipe is very popular and easy t
    51.99s  agent 발화 끝
    52.24s  user  발화 시작: 마랑치요? 처음 들어보네요.
    54.39s  agent 발화 시작: 마랑치님은 한국 요리, 특히 발효 식품 레시피로 유명한 요리 블로거입니다.
    54.46s  user  발화 끝
    59.11s  agent 발화 끝
    59.19s  user  발화 시작: 아, 그렇군요. 그럼 된장은요?
    60.99s  <ret> 발화 (turn14 첫 프레임)
    61.16s  user  발화 끝
    61.19s  agent 발화 시작: <ret> 백종원님의 된장찌개 레시피는 간편하면서도 깊은 맛을 내는 것으로 알려져 있습니다.
    61.29s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.00s]: Search: "된장 레시피" - 백종원의 된장찌개 레시피는 간편하면서도 깊은 맛을 내는 것으로 알려져 있습니다. [youtu
    66.19s  agent 발화 끝
    67.80s  user  발화 시작: 백종원님은 알아요! 된장찌개는 정말 좋아하거든요. —
    71.61s  user  발화 시작: …근데, 혹시 제가 알레르기가 있는 음식은 뭐가 있었죠? 갑자기 기억이 안 나네요.
    71.82s  user  발화 끝
    76.42s  <ret> 발화 (turn17 첫 프레임)
    76.80s  agent 발화 시작: <ret> 하슬님, 벌에 알레르기가 있으시다고 이천이십육년 삼월 삼일에 기록해 두었습니다.
    76.85s  user  발화 끝
    77.05s  ⚡SPAN 주입 [d'=0.63s / d_lead=5.23s]: [2026-03-03] User is allergic to bee stings.
    81.99s  user  발화 시작: 아, 맞다! 벌 알레르기! 여름에 조심해야겠네요.
    82.03s  agent 발화 끝
    85.45s  agent 발화 시작: 네, 특히 야외 활동 시에는 벌에 쏘이지 않도록 주의하시는 게 좋겠습니다.
    85.50s  user  발화 끝
    89.57s  agent 발화 끝
    90.37s  user  발화 시작: 네, 알겠습니다. 감사합니다, 패님.
    92.67s  user  발화 끝
