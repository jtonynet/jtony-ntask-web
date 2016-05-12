exports.render = () => {
	return `<form>
			<div class="list">
				<label class="item item-input item-stacked-label">
					<span class="input-label">Email</span>
					<input type="text" data-email>
				</label>
				<label class="item item-input item-stacked-label">
					<span class="input-label">Senha</span>
					<input type="password" data-password>
				</label>
			</div>
			<div class="padding">
				<button class="button button-positive button-block">
					<i class="ion-home">Entrar</i>
				</button>
			</div>
		</form>
		<div class="padding">
			<button class="button button-block" data-signup>
				<i class="ion-person-add">Cadastrar</i>
		</div>`;
};