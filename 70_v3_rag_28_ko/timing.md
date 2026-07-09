# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 퇴역 군인부(Department of Veterans Affairs)가 언제 만들어졌는지 궁금해. 그냥 대충
     9.32s  <ret> 발화 (turn1 첫 프레임)
     9.64s  agent 발화 시작: <ret> 퇴역 군인부를 만든 해를 말씀드릴게요. 미국 퇴역 군인부는 1930년 7월 21일에 설립되었어요.
     9.78s  user  발화 끝
    11.24s  ⚡SPAN 주입 [d'=1.92s / d_lead=2.99s]: The United States Department of Veterans Affairs was established on Ju
    16.82s  agent 발화 끝
    18.08s  user  발화 시작: 음, 1930년이라고? 그게 맞는 건가? 뭔가 좀 더 일찍 만들어졌을 것 같은데…
    23.59s  <ret> 발화 (turn3 첫 프레임)
    23.67s  agent 발화 시작: <ret> 혹시 다른 부서와 혼동하신 건 아닐까요? 퇴역 군인부의 전신은 1921년에 세워진 퇴역 군인국이었
    23.86s  user  발화 끝
    25.43s  ⚡SPAN 주입 [d'=1.84s / d_lead=11.27s]: The Department of Veterans Affairs evolved from the Bureau of War Risk
    34.90s  agent 발화 시작: 퇴역 군인부의 이전 형태인 전쟁 위험 보험국은 1921년에 설립되었어요.
    34.94s  agent 발화 끝
    40.50s  agent 발화 끝
    41.21s  user  발화 시작: 아, 그렇구나. 그럼 1921년이 아니라 1930년에 공식적으로 부서가 만들어진 거네. 알겠어.
    47.97s  agent 발화 시작: 네, 맞아요. 1930년 7월 21일이 현재의 퇴역 군인부 체계가 공식적으로 시작된 날이라고 보시면 돼요.
    48.07s  user  발화 끝
    55.48s  agent 발화 끝
