# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 제리온. 혹시 테리 초콜릿 오렌지가 언제 처음 나 | S2 영국에서 인기 있다니, 저도 한번 먹어보고 싶네요. 혹시 다른 | S3 근데, 그 초콜릿 모양이 원래 오렌지 모양이었나요? | S4 아, 진짜 맛있겠다.

     0.00s  user  발화 시작: 안녕하세요, 제리온. 혹시 테리 초콜릿 오렌지가 언제 처음 나왔는지 아세요?
     3.29s  agent 발화 시작: 음.
     3.55s  agent 발화 끝
     4.82s  <ret> 발화 (turn2 첫 프레임)
     4.91s  user  발화 끝
     4.96s  agent 발화 시작: <ret> 테리 초콜릿 오렌지는 천구백삼십이년에 로버트와 조지 윈도버 형제에 의해 처음 만들어졌습니다.
     5.73s  ⚡SPAN 주입 [d'=0.91s / d_lead=5.55s]: Terry's Chocolate Orange was first created in 1932 by Robert and Georg
     8.91s  user  발화 시작: 네.
     9.26s  user  발화 끝
    10.47s  user  발화 시작: 아, 그렇군요. 천구백삼십이년이라니, 정말 오래되었네요.
    10.51s  agent 발화 끝
    14.17s  user  발화 끝
    14.44s  agent 발화 시작: 네, 정말 오래되었죠. 그 초콜릿은 오랜 역사와 전통을 가지고 있어요.
    17.00s  user  발화 시작: 음.
    17.16s  user  발화 끝
    18.97s  agent 발화 끝
    19.00s  agent 발화 시작: 초콜릿 오렌지는 영국에서 아주 인기 있는 선물로 알려져 있습니다.
    22.23s  agent 발화 끝
    22.26s  user  발화 시작: 영국에서 인기 있다니, 저도 한번 먹어보고 싶네요. 혹시 다른 맛도 있나요?
    26.21s  <ret> 발화 (turn9 첫 프레임)
    26.62s  agent 발화 시작: <ret> 다양한 맛이 있습니다.
    26.66s  user  발화 끝
    27.63s  ⚡SPAN 주입 [d'=1.42s / d_lead=1.19s]: Terry's Chocolate Orange now comes in a variety of flavours including 
    27.74s  agent 발화 시작: 테리 초콜릿 오렌지는 다크 초콜릿, 밀크 초콜릿 오렌지, 화이트 초콜릿 오렌지 등 다양한 맛으로 출시되고 있
    27.81s  agent 발화 끝
    33.82s  user  발화 시작: 오, 화이트 초콜릿 오렌지도 있군요! —
    34.20s  agent 발화 끝
    36.06s  user  발화 끝
    36.07s  user  발화 시작: 근데, 그 초콜릿 모양이 원래 오렌지 모양이었나요?
    39.24s  <ret> 발화 (turn13 첫 프레임)
    39.26s  agent 발화 시작: <ret> 상징적인 오렌지 모양은 천구백사십구년에 도입되었고, 그 브랜드의 상표가 되었습니다.
    39.41s  user  발화 끝
    40.94s  ⚡SPAN 주입 [d'=1.70s / d_lead=5.28s]: The iconic orange shape was introduced in 1949, and became a trademark
    42.82s  user  발화 시작: 음.
    43.21s  user  발화 끝
    44.54s  agent 발화 끝
    45.90s  user  발화 시작: 천구백사십구년이군요. 그럼 처음에는 다른 모양이었겠네요?
    49.71s  agent 발화 시작: 네, 처음에는 다른 모양이었고, 천구백사십구년에 지금의 오렌지 모양으로 바뀐 겁니다.
    49.74s  user  발화 끝
    55.38s  agent 발화 끝
    55.49s  user  발화 시작: 아, 진짜 맛있겠다.
    56.76s  user  발화 끝
    57.11s  agent 발화 시작: 초콜릿 오렌지는 영국 크리스마스 선물로도 인기가 많습니다.
    60.63s  agent 발화 끝
    60.79s  user  발화 시작: 크리스마스 선물로도 좋겠네요. 감사합니다, 제리온!
    64.02s  user  발화 끝
